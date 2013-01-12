/*global console, tek271 */

describe('jsMetrics', function () {

	describe('calculateMetrics', function() {
		var calculateMetrics = tek271.jsmetrics.calculateMetrics;

		it('handles a single file', function() {
			var fileName= '/src/test/resources/f1.js';
			var info = calculateMetrics([fileName]);
			expect(info.summary).toBeDefined();

			expect(info.files.length).toBe(1);
			var fileInfo = info.files[0];
			expect(fileInfo.fileName).toBe(fileName);

			expect(info.summary.lineCount).toBe(3);
			expect(info.summary.commentLines).toBe(0);
			expect(info.summary.functionCount).toBe(1);
			expect(info.summary.averageFunctionLength).toBe(3);
			expect(info.summary.averageFunctionDepth).toBe(0);
		});

		it('handles multiple files', function() {
			var fn0= '/src/test/resources/f1.js';
			var fn1= '/src/test/resources/fullbook_app.js';
			var info = calculateMetrics([fn0, fn1]);

			expect(info.files.length).toBe(2);
			var fi0 = info.files[0];
			var fi1 = info.files[1];
			expect(fi0.fileName).toBe(fn0);
			expect(fi1.fileName).toBe(fn1);

			expect(fi0.lineCount).toBe(3);
			expect(fi1.lineCount).toBe(83);

			expect(fi0.commentLines).toBe(0);
			expect(fi1.commentLines).toBe(7);

			expect(fi0.functionCount).toBe(1);
			expect(fi1.functionCount).toBe(9);

			expect(info.summary.lineCount).toBe(3+83);
			expect(info.summary.commentLines).toBe(0+7);
			expect(info.summary.functionCount).toBe(1+9);
			expect(info.summary.averageFunctionLength).toBe(16.4);
			expect(info.summary.averageFunctionDepth).toBe(1.1);

			expect(info.summary.blocks.count).toBe(25);
			expect(info.summary.blocks.totalDepth).toBe(91);
			expect(info.summary.blocks.maxDepth).toBe(7);
			expect(info.summary.blocks.depthExceedingThreshold).toBe(9);
			expect(info.summary.blocks.linesDepthExceedingThreshold).toBe(34);
		});
	});



});