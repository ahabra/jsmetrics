/*global console, tek271 */

describe('range', function () {
	var createRange= tek271.jsmetrics.range.createRange;

	describe('createRange', function() {
		it('creates range with given boundaries', function() {
			var r= createRange(1, 4);
			expect(r.start).toBe(1);
			expect(r.end).toBe(4);
		});

		it('puts smaller value first', function() {
			var r= createRange(4, 1);
			expect(r.start).toBe(1);
			expect(r.end).toBe(4);
		});
	});

	describe('createRangeFromObject', function() {
		var createRangeFromObject = tek271.jsmetrics.range.createRangeFromObject;

		it('extracts start and end from given object', function() {
			var obj= {start:1, end:4, p1:'whatever'};
			var r= createRangeFromObject(obj);
			expect(r.start).toBe(1);
			expect(r.end).toBe(4);
		});
	});

	describe('rangeSize', function() {
		it('returns 1 if start=end', function() {
			var r= createRange(1, 1);
			expect(r.size()).toBe(1);
		});

		it('returns size of range', function() {
			expect(createRange(0, 2).size()).toBe(3);
			expect(createRange(2, 4).size()).toBe(3);
			expect(createRange(-2, 2).size()).toBe(5);
		});

		it('finds correct size if range change', function() {
			var r= createRange(1, 1);
			r.end = 3;
			expect(r.size()).toBe(3);
		});
	});

	describe('isIntersectsWith', function() {
		it('returns false if no intersection', function() {
			var r= createRange(1, 3);
			expect(r.isIntersectsWith(createRange(5, 6))).toBe(false);
			expect(r.isIntersectsWith(createRange(-2, 0))).toBe(false);
		});

		it('returns true if there is intersection', function() {
			var r= createRange(1, 4);
			expect(r.isIntersectsWith(createRange(4, 6))).toBe(true);
			expect(r.isIntersectsWith(createRange(-2, 1))).toBe(true);
			expect(r.isIntersectsWith(createRange(1, 4))).toBe(true);
			expect(r.isIntersectsWith(createRange(2, 3))).toBe(true);
		});
	});

	describe('append', function() {
		it('appends a range to a given range', function() {
			var r1= createRange(1, 3);
			var r2= createRange(2, 5);

			r1.append(r2);
			expect(r1.start).toBe(1);
			expect(r1.end).toBe(5);
		});

		it('when appended range is a subrange, then no changes', function() {
			var r1= createRange(1, 5);
			var r2= createRange(2, 4);

			r1.append(r2);
			expect(r1.start).toBe(1);
			expect(r1.end).toBe(5);
		});
	});

	describe('joinRanges', function() {
		var joinRanges = tek271.jsmetrics.range.joinRanges;

		it('joins 2 intersecting ranges', function() {
			var r1= createRange(1, 3);
			var r2= createRange(2, 5);

			var joined = joinRanges([r1, r2]);
			expect(joined.length).toBe(1);
			expect(joined[0].start).toBe(1);
			expect(joined[0].end).toBe(5);
		});

		it('joins only intersecting ranges', function() {
			var r1= createRange(1, 3);
			var r2= createRange(2, 5);
			var r3= createRange(-3, 0);

			var joined = joinRanges([r1, r2, r3]);
			expect(joined.length).toBe(2);
			expect(joined[0].start).toBe(1);
			expect(joined[0].end).toBe(5);
			expect(joined[1].start).toBe(-3);
			expect(joined[1].end).toBe(0);
		});
	});

	describe('sumRangesSize', function() {
		var sumRangesSize = tek271.jsmetrics.range.sumRangesSize;

		it('calculates sum of all ranges', function() {
			var r1= createRange(1, 3);
			var r2= createRange(2, 5);
			var r3= createRange(-3, 0);

			var sum = sumRangesSize([r1, r2, r3]);
			expect(sum).toBe(r1.size() + r2.size() + r3.size());
		});

	});

});