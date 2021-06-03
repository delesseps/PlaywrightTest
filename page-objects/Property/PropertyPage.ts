// page-objects/Property/PropertyPage.ts
import { Mixin } from 'ts-mixer';
import { LoginPage } from "../Common/LoginPage";
import { TopNavBar } from "../Common/TopNavBar";

export class PropertyPage extends Mixin(LoginPage, TopNavBar) {


//export class PropertyPage extends LoginPage {
    
    constructor(_page: any) {
        super(_page);
    }

    PILink='tm-sub-nav .header__area-sub-nav-links-link property-insights-link'; 
    
    //Property Insights link
    

}
//module.exports = { PIHomePage };