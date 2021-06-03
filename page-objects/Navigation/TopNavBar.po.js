/*{"name":"TopNavBar","elements":[{"name":"SellLink"},{"name":"HomeLink"},{"name":"MTM Link"},{"name":"Logout link"},{"name":"Activity Feed"},{"name":"Watchlist"},{"name":"List an item"},{"name":"Category Browse"},{"name":"Log in link"},{"name":"Hamburger icon"},{"name":"Register Now Nav link"},{"name":"Got it thanks button"}],"actions":[{"name":"ClickSellLink","parameters":[]},{"name":"ClickHomeLink","parameters":[]},{"name":"ClickMTMLink","parameters":[]},{"name":"ClickLogoutLink","parameters":[]},{"name":"SelectNotifications","parameters":[]},{"name":"SelectWatclist","parameters":[]},{"name":"SelectListAnItem","parameters":[]},{"name":"SelectBrowse","parameters":[]},{"name":"Click Log in link","parameters":[]},{"name":"Open hamburger menu","parameters":[]},{"name":"Confirm hamburger menu is available","parameters":[]},{"name":"Click Register Now Nav link","parameters":[]},{"name":"Dismiss MTM tooltip","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var TopNavBar = function TopNavBar(host) {
        var find = host ? host.element.bind(host) : element;
        this.sellLink = find(by.css('tm-shell-main-nav li:nth-of-type(2)'));
        this.homeLink = find(by.css('[href="/"]'));
        this.mtmLink = find(by.css('tm-shell-main-nav li:nth-of-type(4)'));
        this.logoutLink = find(by.css('[tg-click="$ctrl.logOut()"]'));
        this.activityFeed = find(by.css('.desktop-header__nav .desktop-header__nav-item:nth-of-type(4) span'));
        this.watchlist = find(by.css('tm-shell-main-nav li:nth-of-type(3)'));
        this.listAnItem = find(by.css('tm-shell-main-nav li:nth-of-type(2)'));
        this.categoryBrowse = find(by.css('[ng-click="$ctrl.toggleActive($event)"] span'));
        this.logInLink = find(by.css('tm-shell-log-in-out [class="logged-out__log-in"]'));
        this.hamburgerIcon = find(by.css('[name="menu-hamburger"]'));
        this.registerNowNavLink = find(by.css('.logged-out__register'));
    };
    TopNavBar.prototype.clickSellLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.sellLink.click();
        });
        return result;
    };
    TopNavBar.prototype.clickHomeLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.homeLink.click();
        });
        return result;
    };
    TopNavBar.prototype.clickMtmLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmLink.click();
        });
        return result;
    };
    TopNavBar.prototype.clickLogoutLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logoutLink.click();
        });
        return result;
    };
    TopNavBar.prototype.selectNotifications = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.activityFeed.click();
        });
        return result;
    };
    TopNavBar.prototype.selectWatclist = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.watchlist.click();
        });
        return result;
    };
    TopNavBar.prototype.selectListAnItem = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.listAnItem.click();
        });
        return result;
    };
    TopNavBar.prototype.selectBrowse = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBrowse.click();
        });
        return result;
    };
    TopNavBar.prototype.clickLogInLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logInLink.click();
        });
        return result;
    };
    TopNavBar.prototype.openHamburgerMenu = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.hamburgerIcon.click();
        });
        return result;
    };
    TopNavBar.prototype.confirmHamburgerMenuIsAvailable = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.hamburgerIcon.isDisplayed();
        });
        return result;
    };
    TopNavBar.prototype.clickRegisterNowNavLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.registerNowNavLink.click();
        });
        return result;
    };
    return TopNavBar;
}();
