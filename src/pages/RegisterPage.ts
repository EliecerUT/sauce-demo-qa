import { Locator, Page } from "@playwright/test";

type FillsForm = 'First name' | 'Last name' | 'Email address' | 'Password' | 'State' | 'Date of Birth' | 'Gender' | 'House number' | 'City' | 'Postal code' | 'Country' | 'Phone' | 'Street';

export class RegisterPage {

    private readonly registerButton:Locator; 
    private readonly FillsForm: Record<FillsForm, Locator>;
    readonly errorMessage: Locator;

    constructor(private readonly page:Page) {
       this.registerButton = this.page.getByRole('button', { name:"Register" });
       this.FillsForm = {
            'First name': this.page.getByRole('textbox', { name: 'First name' }),
            'Last name': this.page.getByRole('textbox', { name: 'Last name' }),
            'Email address': this.page.getByRole('textbox', { name: 'Email address' }),
            'Password': this.page.getByRole('textbox', { name: 'Password' }),
            'Date of Birth': this.page.getByRole('textbox', { name: 'Date of Birth' }),
            'Gender': this.page.getByRole('combobox', { name: 'Gender' }),
            'House number': this.page.getByRole('textbox', { name: 'House number' }),
            'City': this.page.getByRole('textbox', { name: 'City' }),
            'Postal code': this.page.getByRole('textbox', { name: 'Postal code' }),
            'Country': this.page.getByRole('combobox', { name: 'Country' }),
            'Phone': this.page.getByRole('textbox', { name: 'Phone' }),
            'Street': this.page.getByRole('textbox', { name: 'Street' }),
            'State': this.page.getByRole('textbox', { name: 'State' })
        };
        this.errorMessage = this.page.locator('.help-block');
    }

    async goto():Promise<void> {
        await this.page.goto('/auth/register', { waitUntil: 'domcontentloaded' });
    }

    // Devuelve el email escrito. Si se pasa fixedEmail se usa tal cual; si no, se genera uno único.
    async fillForm(data: Record<FillsForm, string>, fixedEmail?: string):Promise<string> {
        let email = '';
        for (let [field, value] of Object.entries(data)) {
            if (!this.FillsForm[field as FillsForm]) throw new Error(`Campo desconocido en la tabla: "${field}"`);
            if (field === 'Email address') value = email = fixedEmail ?? value.replace('@', `+${Date.now()}@`);
            if (field === 'Country') await this.FillsForm[field as FillsForm].selectOption({ label: value });
            else await this.FillsForm[field as FillsForm].fill(value);
        }
        return email;
    }

    async clickRegisterButton():Promise<void> {
        await this.registerButton.click();
    }

    async actualPageUrl():Promise<string> {
        return this.page.url();
    }

}