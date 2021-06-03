/*{"name":"Small Screen Navigation Top Bar","elements":[{"name":"Mtm Icon"},{"name":"MTM Profile image"},{"name":"Trade me home button"},{"name":"TM mobile Homepage header"},{"name":"Marketplace Sub Nav drop down"},{"name":"Motors Sub Nav drop down"},{"name":"Jobs Sub Nav drop down"},{"name":"Marketplace sub nav browse"},{"name":"Marketplace sub nav Stores"},{"name":"Marketplace sub nav Latest Deals"},{"name":"Stores landing page"},{"name":"Latest deals landing page"},{"name":"Marketplace Sub Nav Browse 1"},{"name":"Marketplace browse categories page"},{"name":"Motors Sub Nav Browse"},{"name":"Motors category browse page"},{"name":"Jobs Sub Nav Browse link"},{"name":"Jobs Categories landing page"},{"name":"Motors sub nav Used cars"},{"name":"Motors sub nav Motorbikes"},{"name":"Motors sub nav Boats and Marine"},{"name":"Property residential sub nav"},{"name":"Property Commercial sub nav"},{"name":"Property Flatmates sub nav"},{"name":"Property Rural sub nav"},{"name":"Residential for sale results page"},{"name":"Commercial for sale landing page - mobile"},{"name":"Flatmats landing page - mobile"},{"name":"Rural for sale landing page mobile"},{"name":"Search input homepage"},{"name":"My account and profile"},{"name":"MTM subnav"}],"actions":[{"name":"Click MTM icon","parameters":[]},{"name":"Profile image is displayed","parameters":[]},{"name":"Click home button","parameters":[]},{"name":"Small screen homepage headder","parameters":[]},{"name":"Open Marketplace sub nav","parameters":[]},{"name":"Open Motors sub nav","parameters":[]},{"name":"Open Jobs sub nav","parameters":[]},{"name":"Marketplace Stores landing page","parameters":[]},{"name":"Click Marketplace sub nav stores button","parameters":[]},{"name":"Marketplace deals landing page","parameters":[]},{"name":"Click Marketplace sub nav Deals button","parameters":[]},{"name":"Click the Marketplace Browse subnav button","parameters":[]},{"name":"Marketplace categories browse page","parameters":[]},{"name":"Click Motors Sub Nav Browse link","parameters":[]},{"name":"Click Jobs Browse in sub nav","parameters":[]},{"name":"Jobs Category landing page","parameters":[]},{"name":"Click Motors sub nav Used cars","parameters":[]},{"name":"Click Motors sub nav Motorbikes","parameters":[]},{"name":"Click Motors sub nav Boats and Marine","parameters":[]},{"name":"Motors Cat Browse Page","parameters":[]},{"name":"Click residential in subnav","parameters":[]},{"name":"Click Commercial in subnav","parameters":[]},{"name":"Click Flatmates in subnav","parameters":[]},{"name":"Click Rural in subnav","parameters":[]},{"name":"Mobile residential for sale results page","parameters":[]},{"name":"Mobile commercial for sale landing page","parameters":[]},{"name":"Flatmates results landing page","parameters":[]},{"name":"Rural results landing page","parameters":[]},{"name":"Homepage search input is displayed","parameters":[]},{"name":"Click the my account profile link","parameters":[]},{"name":"Open MTM subnav","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var SmallScreenNavigationTopBar = function SmallScreenNavigationTopBar(host) {
        var find = host ? host.element.bind(host) : element;
        this.mtmIcon = find(by.css('tm-shell-main-nav [name="profile-framed"]'));
        this.mtmProfileImage = find(by.css('.mtm-home__profile-card'));
        this.tradeMeHomeButton = find(by.css('tm-shell-main-nav ul a'));
        this.tmMobileHomepageHeader = find(by.css('.mobile-header__primary-action img'));
        this.marketplaceSubNavDropDown = find(by.css('.header__area-sub-nav-links li:nth-of-type(1)'));
        this.motorsSubNavDropDown = find(by.css('.header__area-sub-nav-links li:nth-of-type(1)'));
        this.jobsSubNavDropDown = find(by.css('.header__area-sub-nav-links li:nth-of-type(1)'));
        this.marketplaceSubNavBrowse = find(by.css('tm-marketplace-browse-dropdown a:nth-of-type(1)'));
        this.marketplaceSubNavStores = find(by.css('tm-marketplace-browse-dropdown a:nth-of-type(2)'));
        this.marketplaceSubNavLatestDeals = find(by.css('[ng-href="/marketplace/deals/11"]'));
        this.storesLandingPage = find(by.css('.mp-stores-category-list li:nth-of-type(1)'));
        this.latestDealsLandingPage = find(by.css('[tg-alt="::deal.searchResults.dealPromotionInfo.title"]'));
        this.marketplaceSubNavBrowse_1 = find(by.css('[ng-href="/browse"]'));
        this.marketplaceBrowseCategoriesPage = find(by.css('.browse__container a:nth-of-type(5)'));
        this.motorsSubNavBrowse = find(by.css('tm-motors-browse-dropdown a:nth-of-type(1)'));
        this.motorsCategoryBrowsePage = find(by.css('tm-category-refiner a:nth-of-type(2)'));
        this.jobsSubNavBrowseLink = find(by.css('tm-jobs-browse-dropdown a:nth-of-type(1)'));
        this.jobsCategoriesLandingPage = find(by.css('[tractor-helper="Accounting"]'));
        this.motorsSubNavUsedCars = find(by.css('tm-motors-browse-dropdown ul .browse-menu__section:nth-of-type(1) li:nth-of-type(1)'));
        this.motorsSubNavMotorbikes = find(by.css('tm-motors-browse-dropdown ul .browse-menu__section:nth-of-type(2) li:nth-of-type(1)'));
        this.motorsSubNavBoatsAndMarine = find(by.css('tm-motors-browse-dropdown ul .browse-menu__section:nth-of-type(4) li:nth-of-type(1)'));
        this.propertyResidentialSubNav = find(by.css('tm-property-browse-dropdown a:nth-of-type(1)'));
        this.propertyCommercialSubNav = find(by.css('tm-property-browse-dropdown a:nth-of-type(2)'));
        this.propertyFlatmatesSubNav = find(by.css('tm-property-browse-dropdown a:nth-of-type(3)'));
        this.propertyRuralSubNav = find(by.css('tm-property-browse-dropdown a:nth-of-type(4)'));
        this.residentialForSaleResultsPage = element(by.cssContainingText('Span', 'in Residential for sale'));
        this.commercialForSaleLandingPageMobile = element(by.cssContainingText('Span', 'in Commercial Property for sale'));
        this.flatmatsLandingPageMobile = element(by.cssContainingText('Span', 'in Flatmates wanted'));
        this.ruralForSaleLandingPageMobile = element(by.cssContainingText('Span', 'in Rural'));
        this.searchInputHomepage = find(by.css('input[name="search"]'));
        this.myAccountAndProfile = find(by.css('[href="/my-trade-me/profile"]'));
        this.mtmSubnav = find(by.css('tm-mobile-header button'));
    };
    SmallScreenNavigationTopBar.prototype.clickMtmIcon = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmIcon.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.profileImageIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmProfileImage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickHomeButton = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.tradeMeHomeButton.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.smallScreenHomepageHeadder = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.tmMobileHomepageHeader.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.openMarketplaceSubNav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceSubNavDropDown.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.openMotorsSubNav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsSubNavDropDown.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.openJobsSubNav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsSubNavDropDown.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.marketplaceStoresLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.storesLandingPage.getText();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMarketplaceSubNavStoresButton = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceSubNavStores.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.marketplaceDealsLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.latestDealsLandingPage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMarketplaceSubNavDealsButton = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceSubNavLatestDeals.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickTheMarketplaceBrowseSubnavButton = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceSubNavBrowse.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.marketplaceCategoriesBrowsePage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.marketplaceBrowseCategoriesPage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMotorsSubNavBrowseLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsSubNavBrowse.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickJobsBrowseInSubNav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsSubNavBrowseLink.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.jobsCategoryLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.jobsCategoriesLandingPage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMotorsSubNavUsedCars = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsSubNavUsedCars.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMotorsSubNavMotorbikes = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsSubNavMotorbikes.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickMotorsSubNavBoatsAndMarine = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsSubNavBoatsAndMarine.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.motorsCatBrowsePage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.motorsCategoryBrowsePage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickResidentialInSubnav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyResidentialSubNav.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickCommercialInSubnav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyCommercialSubNav.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickFlatmatesInSubnav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyFlatmatesSubNav.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickRuralInSubnav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyRuralSubNav.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.mobileResidentialForSaleResultsPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.residentialForSaleResultsPage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.mobileCommercialForSaleLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.commercialForSaleLandingPageMobile.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.flatmatesResultsLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.flatmatsLandingPageMobile.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.ruralResultsLandingPage = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.ruralForSaleLandingPageMobile.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.homepageSearchInputIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.searchInputHomepage.isDisplayed();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.clickTheMyAccountProfileLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.myAccountAndProfile.click();
        });
        return result;
    };
    SmallScreenNavigationTopBar.prototype.openMtmSubnav = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmSubnav.click();
        });
        return result;
    };
    return SmallScreenNavigationTopBar;
}();