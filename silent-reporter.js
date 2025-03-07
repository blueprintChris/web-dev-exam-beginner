class SilentReporter {
  onRunComplete(contexts, results) {
    const red = '\x1b[31m';
    const green = '\x1b[32m';
    const reset = '\x1b[0m';

    console.log('\n');

    const printResults = (results, indent = 0) => {
      results.forEach(result => {
        const indentation = ' '.repeat(indent);
        if (result.status === 'failed') {
          console.log(`${indentation}${red}❌ ${result.title}${reset}`);
        } else if (result.status === 'passed') {
          console.log(`${indentation}${green}✔️  ${result.title}${reset}`);
        }
      });
    };

    const printGroupedResults = (groupedResults, indent = 0) => {
      Object.keys(groupedResults).forEach(ancestorTitle => {
        const indentation = ' '.repeat(indent);
        if (ancestorTitle !== 'tests') {
          console.log(`${indentation}${ancestorTitle}`);
        }
        if (Array.isArray(groupedResults[ancestorTitle])) {
          printResults(groupedResults[ancestorTitle], indent + 2);
        } else {
          printGroupedResults(groupedResults[ancestorTitle], indent + 2);
        }
      });
    };

    const groupResultsByAncestors = results => {
      const groupedResults = {};

      results.forEach(result => {
        let currentLevel = groupedResults;
        result.ancestorTitles.forEach(ancestorTitle => {
          if (!currentLevel[ancestorTitle]) {
            currentLevel[ancestorTitle] = {};
          }
          currentLevel = currentLevel[ancestorTitle];
        });
        if (!currentLevel.tests) {
          currentLevel.tests = [];
        }
        currentLevel.tests.push(result);
      });

      return groupedResults;
    };

    const groupedResults = groupResultsByAncestors(
      results.testResults.flatMap(testResult => testResult.testResults)
    );

    printGroupedResults(groupedResults);

    console.log(`=======================================================================`);
    console.log(`${red}❌ ${results.numFailedTests} tests failed`);
    console.log(`${green}✔️  ${results.numPassedTests} tests passed`);
  }
}

export default SilentReporter;
