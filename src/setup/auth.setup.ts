import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL(/\/account/);

    // Guarda la sesión para reutilizarla en los tests @auth
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
