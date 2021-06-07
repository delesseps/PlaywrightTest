import BasePage from "../BasePage";


export class APHomePage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    APSearchText = '#search_query_top';
    APSearchButton = 'button[name="submit_search"]';

    async productSearch(text: string){
        await this.page.fill(this.APSearchText,text);
        await this.page.click(this.APSearchButton);
    }


}
    



