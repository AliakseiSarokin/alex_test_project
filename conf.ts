export let config = {
    specs: [
        './tests/*.js'],
    framework: 'jasmine2',
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }
}