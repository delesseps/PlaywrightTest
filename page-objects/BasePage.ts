export default class BasePage {
    protected page: any;
    
    constructor(_page) {
        this.page = _page;
    }

    APSearchText = '#search_query_top';
    APSearchButton = 'button[name="submit_search"]';

    async productSearch(text: string){
        await this.page.fill(this.APSearchText,text);
        await this.page.click(this.APSearchButton);
    }
}