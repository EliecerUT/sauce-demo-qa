import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { createBdd } from 'playwright-bdd';

type TestUser = {
    email: string;
    password: string;
};

type Fixtures = {
    testUser: TestUser;
    invalidUser: TestUser;
    loginPage: LoginPage;
    RegisterPage: RegisterPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    RegisterPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    testUser: async ({ }, use) => {
        await use({
            email: process.env.USER_EMAIL!,
            password: process.env.USER_PASSWORD!
        });
    },
    invalidUser: async ({ }, use) => {
        await use({
            email: 'invalid@email.com',
            password: 'invalidpassword'
        });
    }
});

export const { Given, When, Then } = createBdd(test);