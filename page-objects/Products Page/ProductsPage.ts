import BasePage from "../BasePage";


export class ProductsPage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    SortByDropdown = '#selectProductSort';

    async sortBy(text: string){
        await this.page.waitForSelector(this.SortByDropdown);
        await this.page.selectOption(this.SortByDropdown, text)
    }



}
    



