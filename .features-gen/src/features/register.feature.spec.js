// Generated from: src\features\register.feature
import { test } from "../../../src/fixtures/pages.ts";

test.describe('Register a new user', () => {
  test.describe.configure({"mode":"serial"});

  test('Register a new user with valid credentials', { tag: ['@mode:serial'] }, async ({ Given, When, Then, And, page, RegisterPage }) => { 
    await Given('I am on the registration page', null, { RegisterPage }); 
    await When('I fill in the registration form with valid credentials', {"dataTable":{"rows":[{"cells":[{"value":"First name"},{"value":"Test"}]},{"cells":[{"value":"Last name"},{"value":"QA"}]},{"cells":[{"value":"Email address"},{"value":"test_qa@example.com"}]},{"cells":[{"value":"Password"},{"value":"Qa!Toolshop#2026x"}]},{"cells":[{"value":"Date of Birth"},{"value":"1990-01-01"}]},{"cells":[{"value":"House number"},{"value":"123"}]},{"cells":[{"value":"City"},{"value":"Manizales"}]},{"cells":[{"value":"Postal code"},{"value":"12345"}]},{"cells":[{"value":"Country"},{"value":"Colombia"}]},{"cells":[{"value":"Phone"},{"value":"1234567890"}]},{"cells":[{"value":"Street"},{"value":"Main Street"}]},{"cells":[{"value":"State"},{"value":"Caldas"}]}]}}, { RegisterPage }); 
    await And('I submit the registration form', null, { RegisterPage }); 
    await Then('I should see a success message indicating that the user has been registered successfully', null, { page }); 
  });

  test('Register a new user with an already registered email', { tag: ['@mode:serial'] }, async ({ Given, When, Then, And, page, RegisterPage }) => { 
    await Given('I am on the registration page', null, { RegisterPage }); 
    await When('I fill in the registration form with an already registered email', null, { RegisterPage }); 
    await And('I submit the registration form', null, { RegisterPage }); 
    await Then('I should see an error message indicating that the email is already registered', null, { page, RegisterPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\register.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":7,"pickleLine":4,"tags":["@mode:serial"],"steps":[{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the registration page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill in the registration form with valid credentials","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I submit the registration form","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message indicating that the user has been registered successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":22,"tags":["@mode:serial"],"steps":[{"pwStepLine":15,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I am on the registration page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I fill in the registration form with an already registered email","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And I submit the registration form","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message indicating that the email is already registered","stepMatchArguments":[]}]},
]; // bdd-data-end