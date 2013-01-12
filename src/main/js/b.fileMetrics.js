/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.file');

(function () {
	tek271.jsmetrics.file.parseText = parseText;
	tek271.jsmetrics.file.parseFile = parseFile;
	tek271.jsmetrics.file.blockDepthThreshold = 4;


	var traverse = tek271.jsmetrics.tree.traverse;
	var debug = true;
	var includeTokenLocation = true;  // this must be true
	var blockDepthThreshold = tek271.jsmetrics.file.blockDepthThreshold;

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
	 * blocks: an object containing:
	 * 		count: # of blocks
	 * 		totalDepth: sum of all blocks depths
	 * 		averageDepth: average depth of blocks
	 * 		maxDepth: max depth of any block
	 * 	 	depthExceedingThreshold: # of blocks with depth exceeding blockDepthThreshold
	 */
	function parseText(text) {
		var ast = getSyntax(text);
		var commentInfo = extractCommentInfo(ast.comments);
		var interestingNodes = extractInterestingNodes(ast);
		var lines = countLines(text);
		var r = calculateFunctionAverages(interestingNodes.functions);
		if (debug) r.ast = ast;
		r.lineCount = lines.lineCount;
		r.commentLines = commentInfo.totalLines;
		r.emptyLines = lines.emptyLines;
		r.functionCount = interestingNodes.functions.length;
		r.functions = interestingNodes.functions;
		r.blocks = createBlockInfo(interestingNodes.blocks);
		return r;
	}

	function createBlockInfo(blocks) {
		var count = blocks.length;
		var summary = calcBlockDepthSummary(blocks);
		var totalDepth= summary.sum;
		return {
			count: count,
			totalDepth: totalDepth,
			averageDepth: count===0? 0 : totalDepth /count,
			maxDepth: summary.maxDepth,
			depthExceedingThreshold: summary.depthExceedingThreshold
		}
	}

	function calcBlockDepthSummary(blocks) {
		var sum=0, maxDepth= 0, depth, depthExceedingThreshold=0;
		for (var i= 0, n= blocks.length; i<n; i++) {
			depth = blocks[i].depth;
			sum += depth;
			if (depth>maxDepth) maxDepth= depth;
			if (depth > blockDepthThreshold) depthExceedingThreshold++;
		}
		return {sum:sum, maxDepth:maxDepth, depthExceedingThreshold:depthExceedingThreshold};
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

	function extractInterestingNodes(ast) {
		var result = traverse(ast, filter);
		var matchedList = result.matched;
		var functions = [];
		var blocks = [];
		for (var i = 0, n = matchedList.length; i < n; i++) {
			var item = matchedList[i];
			if (isFunction(item.name, item.value)) {
				functions.push( extractFunctionInfo(item) );
			} else
			if (isBlock(item.name)) {
				blocks.push( extractBlockInfo(item) );
			}
		}
		return {functions:functions, blocks:blocks};
	}

	function filter(name, value) {
		return isFunction(name, value) || isBlock(name);
	}

	function isFunction(name, value) {
		return name === 'type' && value.indexOf('Function') >= 0;
	}

	function isBlock(name) {
		return name === 'body';
	}

	function extractFunctionInfo(item) {
		var itemParent = item.parent;
		return {name:extractName(itemParent), type:item.value,
			start:itemParent.loc.start.line, end:itemParent.loc.end.line,
			depth:calculateFunctionDepth(item.path)};
	}

	function extractBlockInfo(item) {
		return {depth:calculateBlockDepth(item.path)};
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


	function calculateFunctionDepth(path) {
		var ar = path.split('/body/');
		return Math.max(ar.length - 2, 0);
	}

	function calculateBlockDepth(path) {
		var ar = path.split('body');
		return Math.max(ar.length-2, 0);
	}


	// extract node.id.name
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
			loc:includeTokenLocation,
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