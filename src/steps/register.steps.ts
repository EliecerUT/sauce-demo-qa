import { DataTable } from "playwright-bdd";
import { Given, Then, When } from "../fixtures/pages";
import { expect } from "@playwright/test";

// Datos del usuario registrado en el primer escenario.
// Viven mientras dure el worker, por eso el feature debe correr con @mode:serial.
let registeredData: Record<string, string>;
let registeredEmail: string;

Given('I am on the registration page', async ({ RegisterPage }) => {
    await RegisterPage.goto();
});

// WHEN

When('I fill in the registration form with valid credentials', async ({ RegisterPage }, dataTable: DataTable) => {
    registeredData = dataTable.rowsHash();
    registeredEmail = await RegisterPage.fillForm(registeredData);
});

When('I fill in the registration form with an already registered email', async ({ RegisterPage }) => {
    if (!registeredEmail) throw new Error('No hay email registrado: el escenario de registro debe correr primero');
    await RegisterPage.fillForm(registeredData, registeredEmail);
});

When('I submit the registration form', async ({ RegisterPage }) => {
    await RegisterPage.clickRegisterButton();
});

// THEN

Then('I should see a success message indicating that the user has been registered successfully', async ({ page }) => {
    await expect(page, 'Not redirected to login page').toHaveURL(/\/auth\/login/);
})

Then('I should see an error message indicating that the email is already registered', async ({ RegisterPage, page }) => {
    await expect(RegisterPage.errorMessage).toContainText('A customer with this email address already exists.');
    await expect(page).toHaveURL(/\/auth\/register/);
})
