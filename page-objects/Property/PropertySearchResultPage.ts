// page-objects/Property/PropertyPage.ts
import { PropertyPage } from "./PropertyPage";

export class PropertySearchResultPage extends PropertyPage {
    constructor(_page: any) {
        super(_page);
    }

    tmPropertySearchComponent='tm-property-search-component';
    tmSearchHeaderHeading='tm-search-header-heading h1'

    getTmSearchHeaderHeading = async () => {
        return this.page.innerText(this.tmSearchHeaderHeading);
    }
    //Property Insights link
    

}
//module.exports = { PIHomePage };