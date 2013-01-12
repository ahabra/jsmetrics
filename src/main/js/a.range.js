/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.range');

(function () {
	tek271.jsmetrics.range.createRange = createRange;
	tek271.jsmetrics.range.createRangeFromObject = createRangeFromObject;
	tek271.jsmetrics.range.joinRanges = joinRanges;
	tek271.jsmetrics.range.sumRangesSize = sumRangesSize;

	function createRangeFromObject(obj) {
		return createRange(obj.start, obj.end);
	}

	function createRange(start, end) {
		if (start>end) {
			var t= start;
			start= end;
			end=t;
		}
		return {
			start: start,
			end: end,
			size: size,
			isIntersectsWith: isIntersectsWith,
			append: append
		};
	}

	function size() {
		return this.end- this.start+1;
	}

	function isIntersectsWith(range) {
		if (this.end < range.start) return false;
		if (this.start > range.end) return false;
		return true;
	}

	function append(range) {
		var start = Math.min(this.start, range.start);
		var end = Math.max(this.end, range.end);
		this.start = start;
		this.end= end;
	}

	function joinRanges(ranges) {
		var joined = [];
		for (var i=0, n=ranges.length; i<n; i++) {
			joined = appendToJoined(joined, ranges[i]);
		}
		return joined;
	}

	function appendToJoined(joined, range) {
		for (var i= 0, n=joined.length; i<n; i++) {
			if (joined[i].isIntersectsWith(range)) {
				joined[i].append(range);
				return joined;
			}
		}
		joined.push(range);
		return joined;
	}

	function sumRangesSize(ranges) {
		var sum=0;
		for (var i=0, n=ranges.length; i<n; i++) {
			sum += ranges[i].size();
		}
		return sum;
	}

})();