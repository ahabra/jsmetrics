/*global console, namespace, tek271 */

namespace('tek271.jsmetrics.report');

(function () {
	tek271.jsmetrics.report.htmlReport = htmlReport;

	var threshold= tek271.jsmetrics.file.blockDepthThreshold;

	var ignoreEmpty = '<span class="comment">(ignore empty lines)</span>';
	var headers = ['#', 'File Name', 'Code Lines', 'Comment Lines', 'Empty Lines',
					'Functions', 'Av. Function Length'+ignoreEmpty, 'Av. Function Depth',
					'Blocks', 'Av. Block Depth', 'Max Block Depth',
					'Blocks With Depth >' + threshold, 'Lines With Depth >' + threshold + ignoreEmpty];
	var cssClasses = ['lineCounter', 'fileName', 'codeLines', 'commentLines', 'emptyLines',
					'functions', 'averageFunctionLength', 'averageFunctionDepth',
					'blocks', 'averageBlockDepth', 'maxBlockDepth',
					'blockDepthExceedingThreshold', 'linesDepthExceedingThreshold'];

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
			fc===0? 0 : (file.totalFunctionsDepth/fc).toFixed(2),
			file.blocks.count,
			file.blocks.averageDepth.toFixed(2),
			file.blocks.maxDepth,
			file.blocks.depthExceedingThreshold,
			file.blocks.linesDepthExceedingThreshold
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
			summary.averageFunctionDepth.toFixed(2),
			summary.blocks.count,
			summary.blocks.averageDepth.toFixed(2),
			summary.blocks.maxDepth,
			summary.blocks.depthExceedingThreshold,
			summary.blocks.linesDepthExceedingThreshold
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