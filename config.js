exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  getPageTimeout: 50 * 1000,
  allScriptsTimeout: 500 * 1000,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  capabilities: {
    "browserName": "chrome"
  },

  specs: [
    "./features/login.feature"

  ],

  cucumberOpts: {
    require: [
      "./features/_step_definitions/*Steps.js",
      "./supports/timeout.js"
    ],
    tags: false,
    profile: false,
    format: [
      require.resolve("cucumber-pretty"),
      "json:reports/results.json"
    ],
    "no-source": true
  },
  ignoreUncaughtExceptions: true, // ignore error code 199 (uncaught exception) to create report for failed step
  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
  },
};