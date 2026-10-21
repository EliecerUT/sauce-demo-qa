
import { Given, When, Then } from '../fixtures/pages';

import { expect } from '@playwright/test';

Given('I am on the login page', async ({ loginPage }) => {
    await loginPage.goto();
});

// WHEN

When('I enter a valid username and password', async ({ loginPage, testUser }) => {
    await loginPage.login(testUser.email, testUser.password);
});

When('I enter an invalid username and password', async ({ loginPage, invalidUser }) => {
    await loginPage.login(invalidUser.email, invalidUser.password);
});

When('I click the login button', async ({ loginPage }) => {
    await loginPage.clickLoginButton();
});

When('I leave the username and password fields empty', async ({ loginPage }) => {

});

// THEN

Then('I should be redirected to the home page', async ({ page }) => {
    // await page.getByText('Your Account').click();
    await expect(page, 'User is not redirected to the Account page').toHaveURL('/account');
});

Then('I should see an error message indicating invalid credentials', async ({ page }) => {

});

Then('I should see an error message indicating that fields cannot be empty', async ({ page }) => {

})



