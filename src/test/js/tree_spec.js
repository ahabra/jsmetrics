/*global console, tek271 */

describe('tree', function () {

	describe('traverse', function() {
		var traverse = tek271.jsmetrics.tree.traverse;

		it('go thru nodes of simple tree', function() {
			var tree={
				type: 'FunctionExpression',
				id: null,
				params: []
			};
			var result= traverse(tree);
			expect(result.nodeCount).toBe(3);
		});

		it('gets a subset by filter', function() {
			var tree={
				type: 'FunctionExpression',
				id: null,
				params: []
			};

			function filter(name, value) {
				return name === 'type';
			}

			var result= traverse(tree, filter);
			expect(result.nodeCount).toBe(3);
			expect(result.matched).toEqual([{name:'type', value:'FunctionExpression', parent: tree, path:'/type'}]);
		});

		it('goes thru subtrees', function() {
			var start= {line: 1, column: 10};
			var end= {line:2, column:20};
			var tree={start: start,	end: end};

			function filter(name, value) {
				return name==='column' && value>10;
			}

			var result= traverse(tree, filter);
			expect(result.nodeCount).toBe(6);
			expect(result.matched).toEqual([{name:'column', value:20, parent:end, path:'/end/column'}]);
		});

		it('goes thru array nodes', function() {
			var p1= {id: 'p1', type:'int'};
			var p2= {id: 'p2', value: 5};
			var tree={
				params: [p1, p2]
			};

			function filter(name, value) {
				return name === 'id';
			}

			var result= traverse(tree, filter);
			expect(result.nodeCount).toBe(5);
			expect(result.matched[0]).toEqual({name:'id', value:'p1', parent:p1, path:'/params/0/id'});
			expect(result.matched[1]).toEqual({name:'id', value:'p2', parent:p2, path:'/params/1/id'});
		});

		it('parse real example', function() {
			var funcDeclaration = {
				type: 'FunctionDeclaration',
				id: {
					type: 'Identifier',	name: 'a',
					loc: {start: { line: 3, column: 9	}, end: { line: 3,	column: 10 }}
				},
				params: [
					{	type: 'Identifier',	name: 'p1',
						loc: {start: { line: 3,	column: 11 },	end: { line: 3, column: 13 }}
					},
					{	type:'Identifier', name:'p2',
						loc: {start: {line: 3,column: 15},end: {line: 3,column: 17}}
					}
				],
				defaults: [],
				body: {
					type: 'BlockStatement',	body: [],
					loc: {start: {line: 3,column: 18},end: {line: 4,column: 1}}
				},
				rest: null,
				generator: false,
				expression: false,
				loc: {
					start: {line: 3,column: 0},
					end: {line: 4,column: 1	}
				}
			};
			var tree= {
				type: 'Program',
				body: [	funcDeclaration	],
				loc: {
					start: {line: 3,column: 0	},
					end: {line: 4,column: 1	}
				},
				comments: [],
				errors: []
			};

			function filter(name, value) {
				return name === 'type' && value==='FunctionDeclaration';
			}

			var result= traverse(tree, filter);
			expect(result.nodeCount).toBe(62);
			expect(result.matched[0]).toEqual({name:'type', value:'FunctionDeclaration', parent:funcDeclaration,
				path:'/body/0/type'});
		});

	});

});