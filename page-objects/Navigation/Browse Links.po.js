/*{"name":"Browse Links","elements":[{"name":"topLevelCategory"},{"name":"secondLevelCategory"},{"name":"thirdLevelCategory"},{"name":"PropertyLink"},{"name":"FlatmatesWantedLink"},{"name":"View listings button"}],"actions":[{"name":"browseTopLevelCategory","parameters":[]},{"name":"browseSecondLevelCategory","parameters":[]},{"name":"browsethridLevelCategory","parameters":[]},{"name":"TopLevelCategoryDisplayed","parameters":[]},{"name":"ClickPropertyLink","parameters":[]},{"name":"ClickFlatmatesWantedLink","parameters":[]},{"name":"Choose view listings button","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var BrowseLinks = function BrowseLinks(host) {
        var find = host ? host.element.bind(host) : element;
        this.topLevelCategory = find(by.css('[ui-view="categoryRefine"] li:nth-child(2) > a'));
        this.secondLevelCategory = find(by.css('[href="/marketplace/antiques-collectables/other"]'));
        this.thirdLevelCategory = find(by.css('[ui-view="categoryRefine"] li:nth-child(5) > a'));
        this.propertyLink = find(by.css('[href="/property"]'));
        this.flatmatesWantedLink = find(by.css('[ng-href="/property/trade-me-property/flatmates-wanted"]'));
        this.viewListingsButton = element(by.css('[ng-if="$ctrl.hasScrollableContainerFooter"]')).element(by.css('[ng-if="$ctrl.isButton"]'));
    };
    BrowseLinks.prototype.browseTopLevelCategory = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.topLevelCategory.click();
        });
        return result;
    };
    BrowseLinks.prototype.browseSecondLevelCategory = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.secondLevelCategory.click();
        });
        return result;
    };
    BrowseLinks.prototype.browsethridLevelCategory = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.thirdLevelCategory.click();
        });
        return result;
    };
    BrowseLinks.prototype.topLevelCategoryDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.topLevelCategory.isDisplayed();
        });
        return result;
    };
    BrowseLinks.prototype.clickPropertyLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.propertyLink.click();
        });
        return result;
    };
    BrowseLinks.prototype.clickFlatmatesWantedLink = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.flatmatesWantedLink.click();
        });
        return result;
    };
    BrowseLinks.prototype.chooseViewListingsButton = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.viewListingsButton.click();
        });
        return result;
    };
    return BrowseLinks;
}();