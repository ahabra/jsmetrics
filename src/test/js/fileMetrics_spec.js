/*global console, tek271 */

describe('fileMetrics', function () {

	describe('parseText', function () {
		var parseText = tek271.jsmetrics.file.parseText;

		it('find # of lines in a file w.o. comments', function () {
			var text = '\n' +
				'\n' +
				'function a(p1, p2){\n' +
				'}\n ';
			var info = parseText(text);
//			console.log(JSON.stringify(info.ast, null, 2));
			expect(info.lineCount).toBe(5);
			expect(info.emptyLines).toBe(3);
		});

		it('finds # of lines in a file with comments at top and middle', function() {
			var text = '//comment\n' +
				'\n' +
				'function a(){\n' +
				'  // comment2\n' +
				'  /* comment3*/\n' +
				'}\n';
			var info = parseText(text);
			expect(info.lineCount).toBe(7);
			expect(info.emptyLines).toBe(2);
		});

		it('finds # of lines in a file with comments at bottom', function() {
			var text =
				'function a(){\n' +
				'/* comment0*/\n' +
				'}\n' +
				'// comment';
			var info = parseText(text);
			expect(info.lineCount).toBe(4);
		});

		it('finds # of comment lines', function() {
			var text = '//comment\n' +
				'\n' +
				'function a(){\n' +
				'  // comment2\n' +
				'  /* comment3*/\n' +
				'}\n' +
				'//comment4';
			var info = parseText(text);
			expect(info.commentLines).toBe(4);
		});

		it('finds # of functions', function() {
			var text=
				'function a() {\n' +
					'var a=function() {\n' +
					'}\n' +
				'}';
			var info = parseText(text);
			expect(info.functionCount).toBe(2);
		});

		it('finds simple function details', function() {
			var text=
				'function f1() {\n' +
				'}';
			var info = parseText(text);
			expect(info.functionCount).toBe(1);
			expect(info.functions[0]).toEqual({name:'f1', type:'FunctionDeclaration', start:1, end:2, depth:0});
		});

		it('finds nested functions details', function() {
			var text=
				'function f1() {\n' +
				'  var f2=function() {\n' +
				'  }\n' +
				'}';
			var info = parseText(text);
//			console.log(JSON.stringify(info.ast, null, 2));
			expect(info.functionCount).toBe(2);
			expect(info.functions[0]).toEqual({name:'f1', type:'FunctionDeclaration', start:1, end:4, depth:0});
			expect(info.functions[1]).toEqual({name:'', type:'FunctionExpression', start:2, end:3, depth:1});
		});

		it('finds depth of function', function() {
			var text=	'{{{ function f1(){}  }}}';
			var info = parseText(text);
			expect(info.functionCount).toBe(1);
			expect(info.functions[0]).toEqual({name:'f1', type:'FunctionDeclaration', start:1, end:1, depth:3});
		});

	});


	describe('parseFile', function() {
		var parseFile= tek271.jsmetrics.file.parseFile;

		it('reads simple file', function() {
			var fileName= '/src/test/resources/f1.js';
			var info= parseFile(fileName);
			expect(info.fileName).toBe(fileName);
			expect(info.lineCount).toBe(3);
			expect(info.commentLines).toBe(0);
			expect(info.functionCount).toBe(1);
			expect(info.functions[0]).toEqual({name:'f1', type:'FunctionDeclaration', start:1, end:3, depth:0});

			expect(info.totalFunctionsLines).toBe(3);
			expect(info.totalFunctionsDepth).toBe(0);
			expect(info.averageFunctionLength).toBe(3);
			expect(info.averageFunctionDepth).toBe(0);
		});

		it('reads real file', function() {
			var fileName= '/src/test/resources/fullbook_app.js';
			var info= parseFile(fileName);
			expect(info.fileName).toBe(fileName);
			expect(info.lineCount).toBe(83);
			expect(info.commentLines).toBe(7);
			expect(info.functionCount).toBe(9);
			expect(info.functions[0]).toEqual({name:'', type:'FunctionExpression', start:4, end:83, depth:0});

			expect(info.totalFunctionsLines).toBe(161);
			expect(info.totalFunctionsDepth).toBe(11);
			expect(info.averageFunctionLength).toBe(161/9);
			expect(info.averageFunctionDepth).toBe(11/9);
		});

	});

});