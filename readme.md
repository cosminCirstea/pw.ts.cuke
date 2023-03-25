# Template framework using Playwright with TypeScript and Cucumber

## 1. Introduction

This project aims to be a quick-start example for an automation testing framework based on Playwright, Typescript and Cucumber

## 2. What do you need to use it?

- Install [NodeJS](https://nodejs.org/en/download/)
- Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):
- Restart visual studio code
- Open terminal and execute command -> `npm install`

- If you use Visual Studio Code
    - Please install the recommended Extensions. You can see them by accessing the Extensions tab and searching for `@recommended`. They will appear under the `Workspace Recommendations` title. Below are the extensions' names and a short description for each.
        - `ESLint` - static analysys tool for code quality
        - `Prettier - Code formatter` - code formatter. Shortcut to format code is shift+alt+f or ctrl+s which also saves your changes 
        - `Playwright test for VSCode` extension -> https://playwright.dev/docs/getting-started-vscode
        - `Playwright Snippets` - provides playwright code snippets. Write `pw` in your code to trigger the suggestions
        - `Cucumber (Gherkin) Full Support` - provides all the Cucumber functionalities like implemented steps suggestions in feature files, feature file to code navigation, etc. - Troubleshooting tip: if fails to see implementation steps, restart visual studio code. If still does not work, check in the bottom right corner options by hovering for `Select Language Mode` to be set to `feature` when having a feature file open.

## 3. Project structure

- On the root of project are files:
    - `.env-cmdrc`
        - properties file to store options(e.g. browser, environment) for running tests  
    - `.gitignore`
        - Folders and files which shouldn't be pushed to repository
    - `cucumber.js`
        - config file for the Cucumber framework
    - `htmlReportGenerator.js`
        - config for generating and storing reports and screenshots                  
    - `package-lock.json`
    - `package.json`
        - Project configuration with dependencies
    - `playwright.config.js`
        - Configuration for e2e tests with `Playwright` in `NodeJS`
    - `readme.md`
        - Documentation of the project
- On the root of project are also folders:
    - `.vscode`
        - It contains the `settings.json` for the `Cucumber (Gherkin) Full Support` extension to enable autocompletes
    - `features`
        - this is where bdd scenarios should live
    - `helpers`
        - Here are files with similar purpose as Pages if you are familiar with Page Object Model, but different structure. You can customise this as you wish for your project, be it Page Object Model, Module-Based architecture, Screenplay Pattern, etc.
    - `node_modules`
        - added to git ignore
        - contains all installed dependencies
    - `reports`
        - added to git ignore
        - contains the `cucumber_report.json` to generate cucumber html reports
    - `screenshots`
        - added to git ignore
        - screenshots of failed tests are saved here
    - `steps`
        - contains the implementation steps for the feature files    

## 4. NPM Scripts

- You can run scripts from `package.json` file or build your own
- To enable running scripts by `play` button on `NPM SCRIPTS` click on the three dots at the right of `EXPLORER` and toggle the `NPM Scripts`
    - `test` -> it will run all tests filtered by tags(default is @Smoke, but can be changed) on the default set browser and environment(e.g. dev and 'chromium')
    - `test:dev` -> it will run all tests like the `test`script in `chromium` and `dev` env
    - `test:staging` -> it will run all tests like the `test`script in `chromium` and `staging` env
    - `test:env:browser` -> should not be run from the `play` button, but the terminal. The role of this script is to allow selection of any environment-browser combination from the .env-cmdrc file. For example, if we want to run the tests on the dev environment and firefox, we can use in the terminal the command `npm run test:env:browser dev,firefox npm test`. The `dev` and `firefox` can be replaced with any environment or browser name from the `.env-cmdrc` file. Please keep in mind that the environment must always be specified first, then the browser. That is because the environment options always have a default browser, and the second option overwrites the first one, meaning that `npm run test:env:browser firefox,dev npm test` will result in our tests to run on dev and `chromium`, because firefox would be overwritten. You can also use a different user with the default browser or with a separate browser, like this: `npm run test:env:browser dev,otherUser npm test` or `npm run test:env:browser dev,firefox,otherUser npm test`

## 5. Cucumber html report

    - By default, after any run of the tests, a cucumber_report is generated and automatically opened in the browser

## 6. How to create new tests

- The `Cucumber (Gherkin) Full Support` extension can help you start off by creating a feature file and writing your desired scenarios. If the steps you are looking for are already implemented, suggestions are displayed.
If the steps you write are not already implemented, the message `was unable to find step` will be displayed. If the npm scripts are run using a tag which is also present in the feature file with steps without implementation, Cucumber will provide structured code snippets in the terminal which you can copy and paste into your `steps` file to get you started writing tests.

- One of the options is to use Playwright's code generator to help you quickly write some tests. To use it, you must create a folder in your root project called `tests` then select the `Testing` tab from the left menu of Visual Studio Code. From there, you can click on the `Record new` option from the bottom left of the screen and a browser is started, which will record all your actions and generate code for it. You can also watch a video of how to do it under the `Generating Tests` title at this link -> https://playwright.dev/docs/getting-started-vscode. You can then move the generated code into your .steps.ts file. You can also change the `testDir` option from `playwright.config.ts` to `./steps` and then you won't have to create the `tests` folder.

- Another option to help you write tests is to use the `Pick locator` option from the `Testing` tab, above the `Record new` option. A new browser is opened and you can quickly get locators for the elements you hover your cursor on, which are copied to the clipboard into the Visual Studio Code and can be easily pasted in your tests. You can also watch a screenshot example under the `Picking a locator` title at this link -> https://playwright.dev/docs/getting-started-vscode

- The `Playwright Snippets` extension can help you with the syntax and default methods provided by Playwright. You can trigger it by writing `pw`, then a list of suggestions is displayed. With `pw-page` you can access the most generic actions like clicking, dbclicking, etc.

## 9. Dependencies used

- @playwright/test

    - [APACHE LICENSE, VERSION 2.0](https://github.com/microsoft/playwright-test/blob/master/LICENSE)
    - [Home page](https://playwright.dev/)
    - [GitHub repository](https://github.com/microsoft/playwright-test)

- @cucumber/cucumber

    - [MIT LICENSE](https://github.com/cucumber/cucumber-js/blob/main/LICENSE)
    - [Home page](https://cucumber.io/)
    - [Github repository](https://github.com/cucumber/cucumber-js)

- cucumber-html-reporter

    - [MIT LICENSE](https://github.com/gkushang/cucumber-html-reporter/blob/develop/LICENSE.txt)
    - [Home page](https://cucumber.io/docs/cucumber/reporting/?lang=javascript)
    - [Github repository](https://github.com/gkushang/cucumber-html-reporter)

- dotenv

    - [BSD 2-Clause "Simplified" License](https://github.com/motdotla/dotenv/blob/master/LICENSE)
    - [Home page](https://www.dotenv.org/)
    - [Github repository](https://github.com/motdotla/dotenv)

- ts-node

    - [MIT LICENSE](https://github.com/TypeStrong/ts-node/blob/main/LICENSE)
    - [Home Page](https://typestrong.org/ts-node/)
    - [Github repository](https://github.com/TypeStrong/ts-node)

- typescript

    - [APACHE LICENSE 2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt)
    - [Home Page](https://www.typescriptlang.org/)
    - [Github repository](https://github.com/microsoft/TypeScript)

- prettier

    - [MIT LICENSE](https://github.com/prettier/prettier/blob/main/LICENSE)
    - [Home Page](https://prettier.io/)
    - [Github repository](https://github.com/prettier/prettier)

- env-cmd

    - [MIT LICENSE](https://github.com/toddbluhm/env-cmd/blob/master/LICENSE)
    - [Home Page](https://github.com/toddbluhm/env-cmd#readme)
    - [Github repository](https://github.com/toddbluhm/env-cmd)

- eslint

    - [MIT LICENSE](https://github.com/eslint/eslint/blob/main/LICENSE)
    - [Home Page](https://eslint.org/)
    - [Github repository](https://github.com/eslint/eslint)

- @typescript-eslint

    - [Copyright JS Foundation and other contributors](https://github.com/typescript-eslint/typescript-eslint/blob/main/LICENSE)
    - [Home Page](https://github.com/typescript-eslint/typescript-eslint#readme)
    - [Github repository](https://github.com/typescript-eslint/typescript-eslint)
