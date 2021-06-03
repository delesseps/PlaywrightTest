/*{"name":"TopNavBar","elements":[{"name":"SellLink"},{"name":"HomeLink"},{"name":"MTM Link"},{"name":"Logout link"},{"name":"Activity Feed"},{"name":"Watchlist"},{"name":"List an item"},{"name":"Category Browse"},{"name":"Log in link"},{"name":"Hamburger icon"},{"name":"Register Now Nav link"},{"name":"Got it thanks button"}],"actions":[{"name":"ClickSellLink","parameters":[]},{"name":"ClickHomeLink","parameters":[]},{"name":"ClickMTMLink","parameters":[]},{"name":"ClickLogoutLink","parameters":[]},{"name":"SelectNotifications","parameters":[]},{"name":"SelectWatclist","parameters":[]},{"name":"SelectListAnItem","parameters":[]},{"name":"SelectBrowse","parameters":[]},{"name":"Click Log in link","parameters":[]},{"name":"Open hamburger menu","parameters":[]},{"name":"Confirm hamburger menu is available","parameters":[]},{"name":"Click Register Now Nav link","parameters":[]},{"name":"Dismiss MTM tooltip","parameters":[]}],"version":"1.7.0"}*/
import BasePage from "../BasePage";

export class TopNavBar extends BasePage {
    
    constructor(_page: any) {
        super(_page);
    }
    sellLink = 'tm-shell-main-nav li:nth-of-type(2)';
    homeLink = '[href="/"]';
    mtmLink = 'tm-shell-main-nav li:nth-of-type(4)';
    logoutLink = '[tg-click="$ctrl.logOut()"]';
    activityFeed = '.desktop-header__nav .desktop-header__nav-item:nth-of-type(4) span';
    watchlist = 'tm-shell-main-nav li:nth-of-type(3)';
    listAnItem = 'tm-shell-main-nav li:nth-of-type(2)';
    categoryBrowse = '[ng-click="$ctrl.toggleActive($event)"] span';
    logInLink = 'tm-shell-log-in-out .logged-out__log-in';
    hamburgerIcon = '[name="menu-hamburger"]';
    registerNowNavLink = '.logged-out__register';

    
    async clickSellLink() {
        await this.page.click(this.sellLink);
    }
    async clickHomeLink() {
        await this.page.click(this.homeLink);
    }

    async clickMtmLink() {
        await this.page.click(this.mtmLink);
    }
    
    async clickLogoutLink() {
        await this.page.click(this.logoutLink);
    }
    
    async selectNotifications() {
        await this.page.click(this.activityFeed);
    }

    async selectWatclist() {
        await this.page.click(this.watchlist);
    }
    
    async selectListAnItem() {
        await this.page.click(this.listAnItem);
    }
    
    async selectBrowse() {
        await this.page.click(this.categoryBrowse);
    }

    async clickLogInLink() {
        await this.page.click(this.logInLink);
    }

    async openHamburgerMenu() {
        await this.page.click(this.hamburgerIcon);
    }
    
    async confirmHamburgerMenuIsAvailable() {
        return this.page.isVisible(this.hamburgerIcon);
    }
    
    async clickRegisterNowNavLink() {
        await this.page.click(this.registerNowNavLink);
    }

}