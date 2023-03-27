/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const reporter = require('cucumber-html-reporter');
const date = new Date();
const currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' + date.getFullYear() + '_'
    + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '_' + date.getMilliseconds();

const options = {
    brandTitle: "pw.ts.cuke framework",
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report_' + currentDate + '.html',
    screenshotsDirectory: './screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true, 
    launchReport: true,
    metaData: {
        "App Version": "1.0.0",
        "Test Environment": "DEV",
        "Platform": "Web/Angular",
        "Sprint": "001"
    }
};

reporter.generate(options);
