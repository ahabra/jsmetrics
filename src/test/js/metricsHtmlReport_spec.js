/*global console, tek271 */

describe('metricsHtmlReport', function () {
	var htmlReport= tek271.jsmetrics.report.htmlReport;
	var calculateMetrics = tek271.jsmetrics.calculateMetrics;

	it('builds a table w.o. details', function() {
		var fileName= '/src/test/resources/f1.js';
		var info = calculateMetrics([fileName]);

		var r= htmlReport(info);
		expect(r[0]).toBe('<table class="jsmetrics">');
		expect(r[1]).toBe(' <tr class="header">');
		expect(r[2]).toBe('  <td class="lineCounter">#</td>');
		expect(r[3]).toBe('  <td class="fileName">File Name</td>');
		expect(r[4]).toBe('  <td class="codeLines">Code Lines</td>');
		expect(r[5]).toBe('  <td class="commentLines">Comment Lines</td>');
		expect(r[6]).toBe('  <td class="emptyLines">Empty Lines</td>');
		expect(r[7]).toBe('  <td class="functions">Functions</td>');
		expect(r[8]).toBe('  <td class="averageFunctionLength">Av. Function Length</td>');
		expect(r[9]).toBe('  <td class="averageFunctionDepth">Av. Function Depth</td>');
		expect(r[10]).toBe(' </tr>');
		expect(r[11]).toBe(' <tr class="summary">');
		expect(r[12]).toBe('  <td class="lineCounter"></td>');
		expect(r[13]).toBe('  <td class="fileName">Summary</td>');
		expect(r[14]).toBe('  <td class="codeLines">3</td>');
		expect(r[15]).toBe('  <td class="commentLines">0</td>');
		expect(r[16]).toBe('  <td class="emptyLines">0</td>');
		expect(r[17]).toBe('  <td class="functions">1</td>');
		expect(r[18]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[19]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[20]).toBe(' </tr>');
		expect(r[21]).toBe('</table>');
	});

	it('builds a table with details', function() {
		var fileName= '/src/test/resources/f1.js';
		var info = calculateMetrics([fileName]);

		var r= htmlReport(info, true);
		expect(r[0]).toBe('<table class="jsmetrics">');
		expect(r[1]).toBe(' <tr class="header">');
		expect(r[2]).toBe('  <td class="lineCounter">#</td>');
		expect(r[3]).toBe('  <td class="fileName">File Name</td>');
		expect(r[4]).toBe('  <td class="codeLines">Code Lines</td>');
		expect(r[5]).toBe('  <td class="commentLines">Comment Lines</td>');
		expect(r[6]).toBe('  <td class="emptyLines">Empty Lines</td>');
		expect(r[7]).toBe('  <td class="functions">Functions</td>');
		expect(r[8]).toBe('  <td class="averageFunctionLength">Av. Function Length</td>');
		expect(r[9]).toBe('  <td class="averageFunctionDepth">Av. Function Depth</td>');
		expect(r[10]).toBe(' </tr>');

		expect(r[11]).toBe(' <tr class="fileDetails">');
		expect(r[12]).toBe('  <td class="lineCounter">1</td>');
		expect(r[13]).toBe('  <td class="fileName">/src/test/resources/f1.js</td>');
		expect(r[14]).toBe('  <td class="codeLines">3</td>');
		expect(r[15]).toBe('  <td class="commentLines">0</td>');
		expect(r[16]).toBe('  <td class="emptyLines">0</td>');
		expect(r[17]).toBe('  <td class="functions">1</td>');
		expect(r[18]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[19]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[20]).toBe(' </tr>');

		expect(r[21]).toBe(' <tr class="summary">');
		expect(r[22]).toBe('  <td class="lineCounter"></td>');
		expect(r[23]).toBe('  <td class="fileName">Summary</td>');
		expect(r[24]).toBe('  <td class="codeLines">3</td>');
		expect(r[25]).toBe('  <td class="commentLines">0</td>');
		expect(r[26]).toBe('  <td class="emptyLines">0</td>');
		expect(r[27]).toBe('  <td class="functions">1</td>');
		expect(r[28]).toBe('  <td class="averageFunctionLength">3.00</td>');
		expect(r[29]).toBe('  <td class="averageFunctionDepth">0.00</td>');
		expect(r[30]).toBe(' </tr>');
		expect(r[31]).toBe('</table>');
	});

});