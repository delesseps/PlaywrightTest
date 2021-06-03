/*{"name":"Homepage","elements":[{"name":"First Category link on homepage"}],"actions":[{"name":"Select first category","parameters":[]},{"name":"First category is displayed","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var Homepage = function Homepage(host) {
        var find = host ? host.element.bind(host) : element;
        this.firstCategoryLinkOnHomepage = find(by.css('tm-homepage-categories li:nth-of-type(1)'));
    };
    Homepage.prototype.selectFirstCategory = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.firstCategoryLinkOnHomepage.click();
        });
        return result;
    };
    Homepage.prototype.firstCategoryIsDisplayed = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.firstCategoryLinkOnHomepage.getText();
        });
        return result;
    };
    return Homepage;
}();