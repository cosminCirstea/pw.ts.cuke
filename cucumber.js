/* eslint-disable no-undef */
const options = [
    '--require-module ts-node/register', // Load TypeScript module
    '--require ./steps/*.steps.ts', // Load step definitions
    '--format progress', //Load custom formatter
    '--format json:./reports/cucumber_report.json',
].join(' ');

const run_features = [
    './features/', // Specify our feature files location
    options
].join(' ');

module.exports = {
    test_runner: run_features,
};