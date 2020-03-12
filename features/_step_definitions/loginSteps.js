const { defineSupportCode } = require('cucumber');
const assert = require('chai').assert;
const LoginPage = require('../../page_objects/loginPage');
const MainPage = require('../../page_objects/mainPage');

const loginPage = new LoginPage();
const mainPage = new MainPage();

defineSupportCode(({Given, When, Then}) => {
  Given(/^I go to login page$/, async() => {
    await loginPage.goToPage();
  });
  
  When(/^I login by username "(.*)" and password "(.*)"$/, async(username, password) => {
    await loginPage.logIn(username, password);
  });

  Then(/^I verify login is success$/, async() => {
    const iconUser = await mainPage.isUserIconPresent()
    assert.equal(iconUser, true);
  });
});