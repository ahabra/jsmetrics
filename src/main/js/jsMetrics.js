/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics');

(function () {
	tek271.jsmetrics.calculateMetrics = calculateMetrics;

	var parseFile= tek271.jsmetrics.file.parseFile;

	function calculateMetrics(fileNames) {
		var fileInfo, files= [];
		var lineCount= 0, commentLines=0, emptyLines= 0,
				functionCount=0, totalFunctionsLines=0, totalFunctionsDepth=0;

		for (var i=0, n=fileNames.length; i<n; i++) {
			var fn= fileNames[i];
			if (tstring(fn,true).trim().isEmpty()) continue;
			fileInfo = parseFile(fn);
			files.push(fileInfo);
			lineCount += fileInfo.lineCount;
			commentLines += fileInfo.commentLines;
			emptyLines += fileInfo.emptyLines;
			functionCount += fileInfo.functionCount;
			totalFunctionsLines += fileInfo.totalFunctionsLines;
			totalFunctionsDepth += fileInfo.totalFunctionsDepth;
		}

		return {
			files: files,
			summary: {
				lineCount: lineCount,
				commentLines: commentLines,
				emptyLines: emptyLines,
				functionCount: functionCount,
				averageFunctionLength: functionCount===0? 0 : totalFunctionsLines/functionCount,
				averageFunctionDepth: functionCount===0? 0 : totalFunctionsDepth/functionCount
			}
		};
	}


})();