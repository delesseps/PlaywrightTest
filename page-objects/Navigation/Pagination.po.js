/*{"name":"Pagination","elements":[{"name":"Load Next Set of Results"},{"name":"Load Previous Sets of Results"},{"name":"Show twenty four More"},{"name":"Back to top"},{"name":"Show previous"},{"name":"MTM pagination"}],"actions":[{"name":"Select load next set of results","parameters":[]},{"name":"Select load previous set of results","parameters":[]},{"name":"Confirm Previous button displayed","parameters":[]},{"name":"Select show twenty four more","parameters":[]},{"name":"Select back to top","parameters":[]},{"name":"Select show previous","parameters":[]},{"name":"Load more MTM results","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var Pagination = function Pagination(host) {
        var find = host ? host.element.bind(host) : element;
        this.loadNextSetOfResults = find(by.css('tm-search-results tg-row:nth-of-type(3) tm-load-more'));
        this.loadPreviousSetsOfResults = find(by.css('tm-search-results tg-row:nth-of-type(1) tm-load-more'));
        this.showTwentyFourMore = find(by.css('tm-search-results tg-row:nth-of-type(3) tm-load-more'));
        this.backToTop = element(by.buttonText('Back to top'));
        this.showPrevious = element(by.buttonText('Show previous'));
        this.mtmPagination = find(by.css('#main-content > ng-component > section > ng-component > section > ng-component > section > div > div > div > div > a'));
    };
    Pagination.prototype.selectLoadNextSetOfResults = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.loadNextSetOfResults.click();
        });
        return result;
    };
    Pagination.prototype.selectLoadPreviousSetOfResults = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.loadPreviousSetsOfResults.click();
        });
        return result;
    };
    Pagination.prototype.confirmPreviousButtonDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.loadPreviousSetsOfResults.isDisplayed();
        });
        return result;
    };
    Pagination.prototype.selectShowTwentyFourMore = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.showTwentyFourMore.click();
        });
        return result;
    };
    Pagination.prototype.selectBackToTop = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.backToTop.click();
        });
        return result;
    };
    Pagination.prototype.selectShowPrevious = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.showPrevious.click();
        });
        return result;
    };
    Pagination.prototype.loadMoreMtmResults = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.mtmPagination.click();
        });
        return result;
    };
    return Pagination;
}();