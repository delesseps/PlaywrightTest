// page-objects/Property/PropertyInsights/PIHomePage.ts
import { PropertyPage } from "../PropertyPage";

export class PIPage extends PropertyPage {
    
    constructor(_page: any) {
        super(_page);
    }

    logInLink = 'pi-shell-log-in-out .logged-out__log-in';
    loggedOutLogInButton='pi-footer button.logged-out__log-in';    //loggedOutLogInButton='text=Log in';
    piAddressSearchInput='#pi-address-search-input';
        
    async search(text: string) {
        await this.page.fill(this.piAddressSearchInput, text);
        //await this.page.click('text='6 Lovelock Avenue, Mount Eden, Auckland, New Zealand');
        await this.page.click('text='+text+' Avenue, Mount Eden, Auckland, New Zealand');
    }

    async clickLogin() {
        await this.page.click(this.loggedOutLogInButton);
    }


    

}
//module.exports = { PIHomePage };