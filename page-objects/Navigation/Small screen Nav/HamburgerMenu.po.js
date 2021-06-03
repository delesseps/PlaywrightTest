/*{"name":"HamburgerMenu","elements":[{"name":"Log in link"},{"name":"Register now link"},{"name":"Home link"},{"name":"Notifications link"},{"name":"Watchlist link"},{"name":"My Trade Me link"},{"name":"List an item link"},{"name":"Element outside of nav"},{"name":"Member photo"},{"name":"My profile link"},{"name":"Member name link"},{"name":"Search Trade me link"},{"name":"Search TM page"},{"name":"Marketplace link"},{"name":"Jobs link"},{"name":"Property link"},{"name":"Motors link"},{"name":"Marketplace landing page banner"},{"name":"Property landing page"},{"name":"Jobs landing page"},{"name":"Motors landing page"},{"name":"cancel button on search page"},{"name":"Cars is displayed on motors landing page on mobile"},{"name":"Search trade me mobile"}],"actions":[{"name":"Click Log in link","parameters":[]},{"name":"Click Register link","parameters":[]},{"name":"Click Home link","parameters":[]},{"name":"Click Notifications link","parameters":[]},{"name":"Click Watchlist link","parameters":[]},{"name":"Click My Trade Me Link","parameters":[]},{"name":"Click List an item link","parameters":[]},{"name":"Close hamburger menu","parameters":[]},{"name":"Confirm member photo area is displayed","parameters":[]},{"name":"Click my profile link","parameters":[]},{"name":"Confirm my profile link is displayed","parameters":[]},{"name":"Click member name link","parameters":[]},{"name":"Confirm member name is displayed","parameters":[]},{"name":"Click member photo","parameters":[]},{"name":"Clicking the search link in hamburger","parameters":[]},{"name":"Search page","parameters":[]},{"name":"Click Marketplace link","parameters":[]},{"name":"Click Jobs link","parameters":[]},{"name":"Click Property link","parameters":[]},{"name":"Click Motors link","parameters":[]},{"name":"Marketplace landing page","parameters":[]},{"name":"Jobs landing page seach","parameters":[]},{"name":"Property landing page search","parameters":[]},{"name":"Motors landing page search","parameters":[]},{"name":"Click cancel button on search page","parameters":[]},{"name":"Cars is displayed on mobile motors landing page","parameters":[]},{"name":"Mobile search trade me is displayed","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var HamburgerMenu = function HamburgerMenu(host) {
        var find = host ? host.element.bind(host) : element;
        this.logInLink = element(by.css('#mobile-menu')).element(by.css('[href="/login"]'));
        this.registerNowLink = element(by.css('#mobile-menu')).element(by.css('[href="http://www.trademe.co.nz/Members/Register.aspx"]'));
        this.homeLink = find(by.css('[alt="Trade Me"]'));
        this.notificationsLink = find(by.css('.tm-shell-main-nav li:nth-of-type(3)'));
        this.watchlistLink = find(by.css('.tm-shell-main-nav li:nth-of-type(2)'));
        this.myTradeMeLink = find(by.css('.tm-shell-main-nav li:nth-of-type(4)'));
        this.listAnItemLink = find(by.css('.tm-shell-main-nav li:nth-of-type(1)'));
        this.elementOutsideOfNav = find(by.css('#Top'));
        this.memberPhoto = element(by.css('#mobile-menu')).element(by.css('[ng-class="profileImage.placeholderColorClass"]'));
        this.myProfileLink = element(by.css('#mobile-menu')).element(by.css('[href="/my-trade-me/profile"]'));
        this.memberNameLink = element(by.css('#mobile-menu')).element(by.css('tm-member-reputation'));
        this.searchTradeMeLink = element(by.buttonText('Search all'));
        this.searchTmPage = find(by.css('[id="search-trade-me"]'));
        this.marketplaceLink = find(by.css('.header__area-nav li:nth-of-type(1)'));
        this.jobsLink = find(by.css('.header__area-nav li:nth-of-type(2)'));
        this.propertyLink = find(by.css('.header__area-nav li:nth-of-type(4)'));
        this.motorsLink = find(by.css('.header__area-nav li:nth-of-type(3)'));
        this.marketplaceLandingPageBanner = find(by.css('.marketplace-header-section__background'));
        this.propertyLandingPage = find(by.css('.property-header-section__background'));
        this.jobsLandingPage = find(by.css('.jobs-header-section__background'));
        this.motorsLandingPage = find(by.css('[placeholder="Keywords (e.g. blue, leather, hybrid)"]'));
        this.cancelButtonOnSearchPage = find(by.css('.o-input__cancelable-button'));
        this.carsIsDisplayedOnMotorsLandingPageOnMobile = find(by.css('.o-rack-item--ruled:nth-of-type(1) .p-h3'));
        this.searchTradeMeMobile = find(by.css('[name="searchForm"]'));
    };
    HamburgerMenu.prototype.clickLogInLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.logInLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickRegisterLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.registerNowLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickHomeLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.homeLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickNotificationsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.notificationsLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickWatchlistLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.watchlistLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMyTradeMeLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myTradeMeLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickListAnItemLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.listAnItemLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.closeHamburgerMenu = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.elementOutsideOfNav.click();
        });
        return result;
    };
    HamburgerMenu.prototype.confirmMemberPhotoAreaIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.memberPhoto.isDisplayed();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMyProfileLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myProfileLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.confirmMyProfileLinkIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myProfileLink.isDisplayed();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMemberNameLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.memberNameLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.confirmMemberNameIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.memberNameLink.isDisplayed();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMemberPhoto = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.memberPhoto.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickingTheSearchLinkInHamburger = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.searchTradeMeLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.searchPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.searchTmPage.isPresent();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMarketplaceLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickJobsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickPropertyLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.clickMotorsLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsLink.click();
        });
        return result;
    };
    HamburgerMenu.prototype.marketplaceLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceLandingPageBanner.isPresent();
        });
        return result;
    };
    HamburgerMenu.prototype.jobsLandingPageSeach = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsLandingPage.isPresent();
        });
        return result;
    };
    HamburgerMenu.prototype.propertyLandingPageSearch = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyLandingPage.isPresent();
        });
        return result;
    };
    HamburgerMenu.prototype.motorsLandingPageSearch = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsLandingPage.isPresent();
        });
        return result;
    };
    HamburgerMenu.prototype.clickCancelButtonOnSearchPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.cancelButtonOnSearchPage.click();
        });
        return result;
    };
    HamburgerMenu.prototype.carsIsDisplayedOnMobileMotorsLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.carsIsDisplayedOnMotorsLandingPageOnMobile.isDisplayed();
        });
        return result;
    };
    HamburgerMenu.prototype.mobileSearchTradeMeIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.searchTradeMeMobile.isDisplayed();
        });
        return result;
    };
    return HamburgerMenu;
}();