// page-objects/Property/PropertyPage.ts
import { PropertyPage } from "./PropertyPage";
import BasePage  from "../BasePage";

export class PropertyHomePage extends PropertyPage {
    constructor(_page: any) {
        super(_page);
    }

    searchButton='tm-home-search-banner .tm-property-home-search-banner__submit-button--compact';

    async clickSearch() {
        await this.page.click(this.searchButton);
    }
    //Property Insights link
    

}
//module.exports = { PIHomePage };