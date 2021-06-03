// page-objects/Login/LoginPage.ts
import BasePage from "../BasePage";

export class LoginPage extends BasePage {
    
    constructor(_page: any) {
        super(_page);
    }

    loginEmail = 'input[name="Email"]';
    loginPassword = 'input[name="Password"]';
    loginButton = 'button[id="SignIn"]';

    async loginWithEmailPassword(email: string, password: string) {
        await Promise.all([
            await this.page.fill(this.loginEmail, email),
            await this.page.fill(this.loginPassword, password)
        ]);
        await this.page.click(this.loginButton);
        
    }
}