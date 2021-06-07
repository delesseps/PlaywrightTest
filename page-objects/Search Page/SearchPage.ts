import BasePage from "../BasePage";


export class SearchPage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    SortByDropdown = '#selectProductSort';
    SearchItemProduct = 'a.product_img_link';
    ItemPrice = 'span.price.product-price:visible';

    async sortBy(text: string){
        await this.page.selectOption(this.SortByDropdown, text)
    }

    async selectLowestPricedItem(){
        var amount,minAmount,xIndex;
        await this.page.waitForSelector(this.ItemPrice);
        const all = await this.page.$$(this.ItemPrice);
        
        amount = await this.page.innerText(':nth-match('+ this.ItemPrice + ',1)');
        for (var i = 1; i <= all.length; i++) {
            var currentAmount = await this.page.innerText(':nth-match('+ this.ItemPrice + ',' + i + ')');
            if (currentAmount <= amount){
                minAmount = currentAmount;
                xIndex = i;
            }
          }
          await this.page.click(':nth-match('+ this.SearchItemProduct + ',' + xIndex +')');

    }



}
    



