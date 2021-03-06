/*global console, tek271 */

describe('metricsHtmlReport', function () {
	var htmlReport= tek271.jsmetrics.report.htmlReport;
	var calculateMetrics = tek271.jsmetrics.calculateMetrics;
	var threshold = 6;
	var ignoreEmpty = '<span class="comment">(ignore empty lines)</span>';

	it('builds a table w.o. details', function() {
		var fileName= '/src/test/resources/f1.js';
		var info = calculateMetrics([fileName]);

		var r= htmlReport(info, false, threshold);
		var i=0;
		expect(r[i++]).toBe('<table class="jsmetrics">');
		expect(r[i++]).toBe(' <tr class="header">');
		expect(r[i++]).toBe('  <td class="lineCounter">#</td>');
		expect(r[i++]).toBe('  <td class="fileName">File Name</td>');
		expect(r[i++]).toBe('  <td class="codeLines">Code Lines</td>');
		expect(r[i++]).toBe('  <td class="commentLines">Comment Lines</td>');
		expect(r[i++]).toBe('  <td class="emptyLines">Empty Lines</td>');
		expect(r[i++]).toBe('  <td class="functions">Functions</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionLength">Av. Function Length' + ignoreEmpty + '</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionDepth">Av. Function Depth</td>');
		expect(r[i++]).toBe('  <td class="blocks">Blocks</td>');
		expect(r[i++]).toBe('  <td class="averageBlockDepth">Av. Block Depth</td>');
		expect(r[i++]).toBe('  <td class="maxBlockDepth">Max Block Depth</td>');
		expect(r[i++]).toBe('  <td class="blockDepthExceedingThreshold">Blocks With Depth >' + threshold + '</td>');
		expect(r[i++]).toBe('  <td class="linesDepthExceedingThreshold">Lines With Depth >' + threshold + ignoreEmpty + '</td>');
		expect(r[i++]).toBe(' </tr>');
		expect(r[i++]).toBe(' <tr class="summary">');
		expect(r[i++]).toBe('  <td class="lineCounter"></td>');
		expect(r[i++]).toBe('  <td class="fileName">Summary</td>');
		expect(r[i++]).toBe('  <td class="codeLines">3</td>');
		expect(r[i++]).toBe('  <td class="commentLines">0</td>');
		expect(r[i++]).toBe('  <td class="emptyLines">0</td>');
		expect(r[i++]).toBe('  <td class="functions">1</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[i++]).toBe('  <td class="blocks">3</td>');
		expect(r[i++]).toBe('  <td class="averageBlockDepth">1.00</td>');
		expect(r[i++]).toBe('  <td class="maxBlockDepth">2</td>');
		expect(r[i++]).toBe('  <td class="blockDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe('  <td class="linesDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe(' </tr>');
		expect(r[i++]).toBe('</table>');
	});

	it('builds a table with details', function() {
		var fileName= '/src/test/resources/f1.js';
		var info = calculateMetrics([fileName]);

		var r= htmlReport(info, true, threshold);
		var i=0;
		expect(r[i++]).toBe('<table class="jsmetrics">');
		expect(r[i++]).toBe(' <tr class="header">');
		expect(r[i++]).toBe('  <td class="lineCounter">#</td>');
		expect(r[i++]).toBe('  <td class="fileName">File Name</td>');
		expect(r[i++]).toBe('  <td class="codeLines">Code Lines</td>');
		expect(r[i++]).toBe('  <td class="commentLines">Comment Lines</td>');
		expect(r[i++]).toBe('  <td class="emptyLines">Empty Lines</td>');
		expect(r[i++]).toBe('  <td class="functions">Functions</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionLength">Av. Function Length' + ignoreEmpty + '</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionDepth">Av. Function Depth</td>');
		expect(r[i++]).toBe('  <td class="blocks">Blocks</td>');
		expect(r[i++]).toBe('  <td class="averageBlockDepth">Av. Block Depth</td>');
		expect(r[i++]).toBe('  <td class="maxBlockDepth">Max Block Depth</td>');
		expect(r[i++]).toBe('  <td class="blockDepthExceedingThreshold">Blocks With Depth >' + threshold + '</td>');
		expect(r[i++]).toBe('  <td class="linesDepthExceedingThreshold">Lines With Depth >' + threshold + ignoreEmpty + '</td>');
		expect(r[i++]).toBe(' </tr>');

		expect(r[i++]).toBe(' <tr class="fileDetails">');
		expect(r[i++]).toBe('  <td class="lineCounter">1</td>');
		expect(r[i++]).toBe('  <td class="fileName">/src/test/resources/f1.js</td>');
		expect(r[i++]).toBe('  <td class="codeLines">3</td>');
		expect(r[i++]).toBe('  <td class="commentLines">0</td>');
		expect(r[i++]).toBe('  <td class="emptyLines">0</td>');
		expect(r[i++]).toBe('  <td class="functions">1</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[i++]).toBe('  <td class="blocks">3</td>');
		expect(r[i++]).toBe('  <td class="averageBlockDepth">1.00</td>');
		expect(r[i++]).toBe('  <td class="maxBlockDepth">2</td>');
		expect(r[i++]).toBe('  <td class="blockDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe('  <td class="linesDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe(' </tr>');

		expect(r[i++]).toBe(' <tr class="summary">');
		expect(r[i++]).toBe('  <td class="lineCounter"></td>');
		expect(r[i++]).toBe('  <td class="fileName">Summary</td>');
		expect(r[i++]).toBe('  <td class="codeLines">3</td>');
		expect(r[i++]).toBe('  <td class="commentLines">0</td>');
		expect(r[i++]).toBe('  <td class="emptyLines">0</td>');
		expect(r[i++]).toBe('  <td class="functions">1</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[i++]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[i++]).toBe('  <td class="blocks">3</td>');
		expect(r[i++]).toBe('  <td class="averageBlockDepth">1.00</td>');
		expect(r[i++]).toBe('  <td class="maxBlockDepth">2</td>');
		expect(r[i++]).toBe('  <td class="blockDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe('  <td class="linesDepthExceedingThreshold">0</td>');
		expect(r[i++]).toBe(' </tr>');
		expect(r[i++]).toBe('</table>');
	});

});