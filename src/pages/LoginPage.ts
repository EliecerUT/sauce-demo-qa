import { Page, Locator } from "@playwright/test";

export class LoginPage {

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(private readonly page: Page) {
        this.emailInput = this.page.getByRole('textbox', { name: 'Email address' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login', exact: true });
    }

    async goto():Promise<void> {
        await this.page.goto('/auth/login', { waitUntil: 'domcontentloaded' });
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

}