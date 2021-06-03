
import BasePage from "../BasePage";

//export class mockRequestsSetup (browser, context, page, config) {
export default class MockRequests extends BasePage {
//var mockRequestsSetup = async (browser, context, page, config) => {
    
    constructor(_page: any) {
        super(_page);
    }

    whenGET = async (url_matcher, parameters) => {
        const matcher = `**${url_matcher.source.slice(1).replace(/\\/g, '')}*`;
        console.log(`Creating [GET] matcher: ${matcher}`)
        return this.page.route(matcher, route => route.fulfill({
            status: 200,
            body: JSON.stringify(parameters.body)
        }));
    }

    whenPOST = async (url_matcher, parameters) => {
        const matcher = `**${url_matcher.source.slice(1).replace(/\\/g, '')}*`;
        console.log(`Creating [POST] matcher: ${matcher}`)
        return this.page.route(url_matcher, route => route.fulfill({
            status: 200,
            body: JSON.stringify(parameters.body)
        }))
    }

}
//exports.mockRequestsSetup = mockRequestsSetup;