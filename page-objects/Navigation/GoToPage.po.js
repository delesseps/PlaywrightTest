/*{"name":"GoToPage","elements":[],"actions":[{"name":"goTo","parameters":[{"name":"url"}]},{"name":"getUrl","parameters":[]}],"version":"1.7.0"}*/
module.exports = function () {
    var GoToPage = function GoToPage() {
    };
    GoToPage.prototype.goTo = function (url) {

        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return browser.get(url);
        });
        return result;
    };
    GoToPage.prototype.getUrl = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return browser.getCurrentUrl();
        });
        return result;
    };
    return GoToPage;
}();
