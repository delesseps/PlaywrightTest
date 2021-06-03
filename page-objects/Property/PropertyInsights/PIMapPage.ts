// page-objects/Property/PropertyInsights/PIMapPage.ts
import { PIPage } from "./PIPage";

export class PIMapPage extends PIPage {
    
    constructor(_page: any) {
        super(_page);
    }

    piMapSummaryCard='pi-map-summary-card';

    async checkPiSummaryCard() {
        await this.page.click(this.piMapSummaryCard);
    }

}
//module.exports = { PIHomePage };