import BasePage from "../BasePage";

export class ProductsPage extends BasePage{

    constructor(_page: any) {
        super(_page);
    }

    Quantity = 'input#quantity_wanted.text';
    Size = 'select#group_1.form-control.attribute_select.no-print';
    ColorGreen = 'a[name="Green"]';
    AddtoCartButton = 'button[name="Submit"]';
    ProceedToCheckoutButton = 'a.btn.btn-default.button.button-medium'
    TotalPrice = 'span#total_price';


    async updateQuantity(text: string){
        await this.page.fill(this.Quantity, text);
    }

    async updateSize(text: string){
        switch(text) {
            case 'S':
                var size = '1';
                break;
            case 'M':
                var size = '2';
                break;
            case 'L':
                var size = '3';
                break;
            default:
              break;
          }
        
        await this.page.selectOption(this.Size, size);
    }

    async updateColorToGreen(){
        await this.page.click(this.ColorGreen);
    }

    async clickAddToCartButton(){
        await this.page.click(this.AddtoCartButton);
    }

    async clickProceedToCheckoutButton(){
        await this.page.click(this.ProceedToCheckoutButton);
    }



}
    



