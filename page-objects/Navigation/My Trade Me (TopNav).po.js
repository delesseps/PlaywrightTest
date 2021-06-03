/*{"name":"My Trade Me (TopNav)","elements":[{"name":"My Trade Me"},{"name":"Account"},{"name":"My profile"},{"name":"MTM Home Link"},{"name":"Items I am selling Link"}],"actions":[{"name":"Select My Trade Me","parameters":[]},{"name":"Select My Account","parameters":[]},{"name":"Select My Profile","parameters":[]},{"name":"Select MTM Home Link","parameters":[]},{"name":"Select Items I am selling link","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var MyTradeMeTopNav = function MyTradeMeTopNav(host) {
        var find = host ? host.element.bind(host) : element;
        this.myTradeMe = find(by.css('tm-shell-mtm-dropdown'));
        this.account = find(by.css('[tg-href="\'tm.main.myTradeMe.profile\' | toHref"]'));
        this.myProfile = find(by.css('[routerlink="/my-trade-me/profile"]'));
        this.mtmHomeLink = find(by.css('a tg-rack-item-primary'));
        this.itemsIAmSellingLink = find(by.css('[url="my-trade-me/sell/selling"]'));
    };
    MyTradeMeTopNav.prototype.selectMyTradeMe = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myTradeMe.click();
        });
        return result;
    };
    MyTradeMeTopNav.prototype.selectMyAccount = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.account.click();
        });
        return result;
    };
    MyTradeMeTopNav.prototype.selectMyProfile = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myProfile.click();
        });
        return result;
    };
    MyTradeMeTopNav.prototype.selectMtmHomeLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmHomeLink.click();
        });
        return result;
    };
    MyTradeMeTopNav.prototype.selectItemsIAmSellingLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.itemsIAmSellingLink.click();
        });
        return result;
    };
    return MyTradeMeTopNav;
}();