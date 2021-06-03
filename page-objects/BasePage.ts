// page-objects/basePage.ts


export default class BasePage {
    //private __page: any;
    protected page: any;
    
    constructor(_page) {
        this.page = _page;
    }
    public async navigate(text: string) {
        await this.page.goto(text);
    }

    getTitle = async () => {
        return this.page.title();
    }
}
//module.exports = { basePage };