/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.tree');

(function() {
	tek271.jsmetrics.tree.traverse = traverse;


	var hasFilter;

	function traverse(tree, filter) {
		hasFilter = _.isFunction(filter);
		return traverseDetails(tree, filter, '');
	}

	function traverseDetails(tree, filter, path) {
		var result = {nodeCount:0, matched:[]};

		_.each(tree, function(v, k) {
			var cp= path + '/' + k;
			result.nodeCount++;
			if (hasFilter && filter(k, v)) {
				result.matched.push(createObject(k, v, tree, cp));
			}

			if (_.isArray(v)) {
				_.each(v, function(el, index){
					traverseObject(el, filter, result, cp + '/' + index);
				});
			} else if (_.isObject(v)) {
				traverseObject(v, filter, result, cp);
			}
		});
		return result;
	}

	function traverseObject(object, filter, result, path) {
		var sub = traverseDetails(object, filter, path);
		result.nodeCount += sub.nodeCount;
		if (sub.matched.length > 0) {
			result.matched = result.matched.concat(sub.matched);
		}
	}

	function createObject(k, v, parent, path) {
		return {
			name: k,
			value: v,
			parent: parent,
			path: path
		};
	}

})();