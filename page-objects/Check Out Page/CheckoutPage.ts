import BasePage from "../BasePage";

export class CheckoutPage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    TotalPrice = 'span#total_price';


    async checkTotalPrice(){
        return await this.page.innerText(this.TotalPrice);
    }


}
    



