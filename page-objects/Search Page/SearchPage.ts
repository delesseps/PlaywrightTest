import BasePage from "../BasePage";


export class SearchPage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    SortByDropdown = '#selectProductSort';
    // SearchItemProduct = ':nth-match(.product_list.grid.row img)';
    SearchItemProduct = 'a.product_img_link';

    async sortBy(text: string){
        await this.page.click(this.SortByDropdown)
        await this.page.selectOption(this.SortByDropdown, text)
        await this.page.keyboard.press('Enter');
        await this.page.waitForNavigation();
    }

    async selectLowestPricedItem(){
        await this.page.waitForSelector('span.price.product-price:visible')
        const all = await this.page.$$('span.price.product-price:visible');
        console.log(all.length);
        // await this.page.waitForSelector(this.SearchItemProduct)
        // await this.page.click(':nth-match('+ this.SearchItemProduct + ',' + itemNo +')');
    }



}
    



