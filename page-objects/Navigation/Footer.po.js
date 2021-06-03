/*{"name":"Footer","elements":[{"name":"Log in link"},{"name":"Log out link"},{"name":"Marketplace link"},{"name":"Jobs link"},{"name":"Motors link"},{"name":"Property link"},{"name":"Other Vehicles link"},{"name":"My Trade Me link"},{"name":"Contact us link"}],"actions":[{"name":"Click log in link","parameters":[]},{"name":"Click log out link","parameters":[]},{"name":"Log in link displays","parameters":[]},{"name":"Click Marketplace link","parameters":[]},{"name":"Click Jobs link","parameters":[]},{"name":"Click Motors link","parameters":[]},{"name":"Click Property link","parameters":[]},{"name":"Click My Trade Me link","parameters":[]},{"name":"Click Other vehicles link","parameters":[]},{"name":"Click Contact us link","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var Footer = function Footer(host) {
        var find = host ? host.element.bind(host) : element;
        this.logInLink = find(by.css('tm-shell-footer-large li:nth-of-type(6) a:nth-of-type(2)'));
        this.logOutLink = find(by.css('tm-shell-footer-large li:nth-of-type(6)'));
        this.marketplaceLink = element(by.css('tm-footer [href="/marketplace"]'));
        this.jobsLink = element(by.css('tm-footer [href="/jobs"]'));
        this.motorsLink = element(by.css('tm-footer [href="/motors"]'));
        this.propertyLink = element(by.css('tm-footer [href="/property"]'));
        this.otherVehiclesLink = element(by.css('tm-footer [href="/motors/trade-me-motors"]'));
        this.myTradeMeLink = element(by.css('tm-footer [href="/my-trade-me"]'));
        this.contactUsLink = element(by.linkText('Contact Us'));
    };
    Footer.prototype.clickLogInLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logInLink.click();
        });
        return result;
    };
    Footer.prototype.clickLogOutLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logOutLink.click();
        });
        return result;
    };
    Footer.prototype.logInLinkDisplays = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logInLink.isPresent();
        });
        return result;
    };
    Footer.prototype.clickMarketplaceLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceLink.click();
        });
        return result;
    };
    Footer.prototype.clickJobsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsLink.click();
        });
        return result;
    };
    Footer.prototype.clickMotorsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsLink.click();
        });
        return result;
    };
    Footer.prototype.clickPropertyLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyLink.click();
        });
        return result;
    };
    Footer.prototype.clickMyTradeMeLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myTradeMeLink.click();
        });
        return result;
    };
    Footer.prototype.clickOtherVehiclesLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.otherVehiclesLink.click();
        });
        return result;
    };
    Footer.prototype.clickContactUsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.contactUsLink.click();
        });
        return result;
    };
    return Footer;
}();