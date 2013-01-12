/*global console, namespace, tek271 */

namespace('tek271.jsmetrics.report');

(function () {
	tek271.jsmetrics.report.htmlReport = htmlReport;

	var headers = ['#', 'File Name', 'Code Lines', 'Comment Lines', 'Empty Lines',
					'Functions', 'Av. Function Length', 'Av. Function Depth'];
	var cssClasses = ['lineCounter', 'fileName', 'codeLines', 'commentLines', 'emptyLines',
					'functions', 'averageFunctionLength', 'averageFunctionDepth'];

	function htmlReport(metrics, showDetails) {
		var ar= [];
		ar.push(tagStart('table', 'jsmetrics'));
		ar= ar.concat( createRow(headers, 'header', cssClasses) );

		if (showDetails) {
			for(var i= 0,n=metrics.files.length; i<n; i++) {
				ar= ar.concat(buildFileDetailsRow(i, metrics.files[i]));
			}
		}
		ar = ar.concat(buildSummaryRow(metrics.summary));
		ar.push(tagEnd('table'));
		return ar;
	}

	function buildFileDetailsRow(rowCounter, file) {
		var fc= file.functionCount;
		var values= [rowCounter+1, file.fileName,
			file.lineCount-file.commentLines-file.emptyLines,
			file.commentLines, file.emptyLines,
			file.functionCount,
			fc===0? 0 : (file.totalFunctionsLines/fc).toFixed(2),
			fc===0? 0 : (file.totalFunctionsDepth/fc).toFixed(2)
		];
		return createRow(values, 'fileDetails', cssClasses);
	}

	function buildSummaryRow(summary) {
		var values= ['', 'Summary',
			summary.lineCount-summary.commentLines-summary.emptyLines,
			summary.commentLines,
			summary.emptyLines,
			summary.functionCount,
			summary.averageFunctionLength.toFixed(2),
			summary.averageFunctionDepth.toFixed(2)
		];
		return createRow(values, 'summary', cssClasses);
	}

	function createRow(values, rowClass, cssForTds) {
		var ar=[];
		ar.push(' ' + tagStart('tr', rowClass));
		for (var i=0, n=values.length; i<n; i++) {
			ar.push('  ' + td(values[i], cssForTds[i]));
		}

		ar.push(' ' + tagEnd('tr'));
		return ar;
	}

	function tagStart(tag, cssClass) {
		var css= '';
		if (!_.isUndefined(cssClass) && cssClass.length>0) {
			css= ' class="' + cssClass + '"';
		}
		return '<' + tag + css + '>';
	}

	function tagEnd(tag) {
		return '</' + tag + '>';
	}

	function td(value, cssClass) {
		return tagStart('td', cssClass) + value + tagEnd('td');
	}

})();