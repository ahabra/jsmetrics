/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.file');

(function () {
	tek271.jsmetrics.file.parseText = parseText;
	tek271.jsmetrics.file.parseFile = parseFile;

	var traverse = tek271.jsmetrics.tree.traverse;
	var debug = true;

	function parseFile(fileName) {
		console.log('Parsing ' + fileName);
		var text = readFile(fileName);
		var r = parseText(text);
		r.fileName = fileName;
		return r;
	}

	/**
	 * Parse the given javaScript text and return an object with these attributes:
	 * lineCount: # of lines in the text
	 * commentLines: # of comment lines
	 * functionCount: # of functions
	 * totalFunctionsLines: sum of lengths of all functions, usually > lineCount
	 * totalFunctionsDepth: sum of depths of all functions
	 * averageFunctionLength: average # of lines per function
	 * averageFunctionDepth: average depth per function. Depth here means how deeply nested is the function.
	 * functions: Array of objects, each describe a function in the text. The object has the following members:
	 *     name: name of the function. Empty string for anonymous functions.
	 *     type: FunctionDeclaration or FunctionExpression
	 *     start: line at which the function starts
	 *     end: line at which the function ends.
	 *     depth: How deeply nested is the function.
	 */
	function parseText(text) {
		var ast = getSyntax(text);
		var commentInfo = extractCommentInfo(ast.comments);
		var functions = extractFunctions(ast);
		var lines = countLines(text);
		var r = calculateFunctionAverages(functions);
		if (debug) r.ast = ast;
		r.lineCount = lines.lineCount;
		r.commentLines = commentInfo.totalLines;
		r.emptyLines = lines.emptyLines;
		r.functionCount = functions.length;
		r.functions = functions;

		return r;
	}

	function countLines(text) {
		var lines= text.split('\n');
		var emptyLines= 0, lineCount=lines.length;
		for(var i=0; i<lineCount; i++) {
			if (tstring(lines[i], true).isBlank()) emptyLines++;
		}
		return {
			emptyLines: emptyLines,
			lineCount: lineCount
		};
	}

	function extractFunctions(ast) {
		var result = traverse(ast, filter);
		var matchedList = result.matched;
		var ar = [];
		for (var i = 0, n = matchedList.length; i < n; i++) {
			var item = matchedList[i];
			var itemParent = item.parent;
			var f = {name:extractName(itemParent), type:item.value,
				start:itemParent.loc.start.line, end:itemParent.loc.end.line,
				depth:calculateDepth(item.path)};
			ar.push(f);
		}
		return ar;
	}

	function calculateFunctionAverages(functions) {
		var lines = 0, depth = 0;
		_.each(functions, function (f) {
			lines += (f.end - f.start + 1);
			depth += f.depth;
		});
		var fs= functions.length;
		return {
			totalFunctionsLines:lines, // sum of lengths of all functions, usually > lineCount
			totalFunctionsDepth:depth, // sum of depths of all functions
			averageFunctionLength: fs===0? 0 : lines/fs,
			averageFunctionDepth: fs===0? 0 : depth/fs
		};
	}

	function filter(name, value) {
		return name === 'type' && value.indexOf('Function') >= 0;
	}

	function calculateDepth(path) {
		var ar = path.split('/body/');
		return Math.max(ar.length - 2, 0);
	}

	function extractName(node) {
		if (_.isUndefined(node) || node === null) return '';
		node = node.id;
		if (_.isUndefined(node) || node === null) return '';
		node = node.name;
		if (_.isUndefined(node) || node === null) return '';
		return node;
	}

	function extractSize(loc) {
		return Math.max(loc.end.line - loc.start.line, 1);
	}

	function extractLineCount(ast) {
		return ast.loc.end.line;
	}

	function extractCommentInfo(comments) {
		var totalLines = 0, maxEnd = 0;
		for (var i = 0, n = comments.length; i < n; i++) {
			var comment = comments[i];
			maxEnd = Math.max(maxEnd, comment.loc.end.line);
			totalLines += extractSize(comment.loc);
		}
		return {
			totalLines:totalLines,
			maxEnd:maxEnd
		};
	}

	function getSyntax(text) {
		var options = {
			loc:true,
			tolerant:true,
			comment:true
		};
		return esprima.parse(text, options);
	}

	function readFile(fileName) {
		var text;
		jQuery.ajax({
			async:false,
			url:fileName,
			dataType:'text',
			success:function (data, status) {
				text = data;
			},
			error:function (jqXHR, textStatus, errorThrown) {
				console.log('Error:', textStatus, errorThrown);
			}
		});
		return text;
	}


})();