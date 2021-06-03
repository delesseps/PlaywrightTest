// page-objects/Property/PropertyInsights/PIDetailPage.ts
import { PIPage } from "./PIPage";

export class PIDetailPage extends PIPage {
    
    constructor(_page: any) {
        super(_page);
    }

    piTrackButton='.pi-track-property__page-modal-button'; 
    piTrackButton1='text=Start tracking'; 
    checkInterested='text=I\'m just interested ';
    confirmButton = 'button[type="submit"]';
    piSummaryPropertyAddress='.pi-quick-summary__property-address'; 
    piSummaryPropertyAddressSuburb='.pi-quick-summary__property-address--suburb';
    

    async clickPITrackButton() {
        await this.page.click(this.piTrackButton);
    }

    async clickCheckInterested() {
        //await this.page.waitForSelector(this.checkInterested);
        await this.page.click(this.checkInterested);
    }

    async clickConfirmButton() {
        await this.page.click(this.confirmButton);
    }

    clickConfirmButton1 = async () => {
        await this.page.click(this.confirmButton);
    }

    getPiSummaryPropertyAddressSuburb = async () => {
        return this.page.innerText(this.piSummaryPropertyAddressSuburb);
    }

    getPiSummaryPropertyAddress = async () => {
        return this.page.innerText(this.piSummaryPropertyAddress);
    }


}
//module.exports = { PIHomePage };