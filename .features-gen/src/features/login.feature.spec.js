// Generated from: src\features\login.feature
import { test } from "../../../src/fixtures/pages.ts";

test.describe('Login', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { loginPage }); 
  });
  
  test('Successful login with valid credentials', async ({ When, Then, And, loginPage, page, testUser }) => { 
    await When('I enter a valid username and password', null, { loginPage, testUser }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should be redirected to the home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter a valid username and password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the home page","stepMatchArguments":[]}]},
]; // bdd-data-end