/*{"name":"Breadcrumbs","elements":[{"name":"Category breadcrumb zero"},{"name":"Category breadcrumb one"},{"name":"Category breadcrumb two"},{"name":"Category breadcrumb three"},{"name":"Category breadcrumb four"},{"name":"Category breadcrumb five"}],"actions":[{"name":"Select breadcrumb zero","parameters":[]},{"name":"Select breadcrumb one","parameters":[]},{"name":"Select breadcrumb two","parameters":[]},{"name":"Select breadcrumb three","parameters":[]},{"name":"Confirm breadcrumb zero is displayed","parameters":[]},{"name":"Confirm breadcrumb two is displayed","parameters":[]},{"name":"Confirm breadcrumb one is displayed","parameters":[]},{"name":"Confirm breadcrumb three is displayed","parameters":[]},{"name":"Select breadcrumb four","parameters":[]},{"name":"Select breadcrumb five","parameters":[]},{"name":"Confirm breadcrumb four is displayed","parameters":[]},{"name":"Confirm breadcrumb five is displayed","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var Breadcrumbs = function Breadcrumbs(host) {
        var find = host ? host.element.bind(host) : element;
        this.categoryBreadcrumbZero = find(by.css('tm-breadcrumbs li:nth-of-type(1)'));
        this.categoryBreadcrumbOne = find(by.css('tm-breadcrumbs li:nth-of-type(2)'));
        this.categoryBreadcrumbTwo = find(by.css('tm-breadcrumbs li:nth-of-type(3)'));
        this.categoryBreadcrumbThree = find(by.css('tm-breadcrumbs li:nth-of-type(4)'));
        this.categoryBreadcrumbFour = find(by.css('tm-breadcrumbs li:nth-of-type(5)'));
        this.categoryBreadcrumbFive = find(by.css('tm-breadcrumbs li:nth-of-type(6)'));
    };
    Breadcrumbs.prototype.selectBreadcrumbZero = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbZero.click();
        });
        return result;
    };
    Breadcrumbs.prototype.selectBreadcrumbOne = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbOne.click();
        });
        return result;
    };
    Breadcrumbs.prototype.selectBreadcrumbTwo = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbTwo.click();
        });
        return result;
    };
    Breadcrumbs.prototype.selectBreadcrumbThree = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbThree.click();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbZeroIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbZero.isDisplayed();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbTwoIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbTwo.isDisplayed();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbOneIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbOne.isDisplayed();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbThreeIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbThree.isDisplayed();
        });
        return result;
    };
    Breadcrumbs.prototype.selectBreadcrumbFour = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbFour.click();
        });
        return result;
    };
    Breadcrumbs.prototype.selectBreadcrumbFive = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbFive.click();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbFourIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbFour.isDisplayed();
        });
        return result;
    };
    Breadcrumbs.prototype.confirmBreadcrumbFiveIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.categoryBreadcrumbFive.isDisplayed();
        });
        return result;
    };
    return Breadcrumbs;
}();