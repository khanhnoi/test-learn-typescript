"use strict";
exports.__esModule = true;
exports.Manage = void 0;
var product_1 = require("./product");
var Manage = /** @class */ (function () {
    function Manage() {
        this.store = [];
    }
    Manage.prototype.getProducts = function () {
        return [];
    };
    Manage.prototype.getProductById = function (id) {
        var product = new product_1.Product(1, "p1", 100, 'info', true, 'imageLink');
        return product;
    };
    Manage.prototype.addProduct = function () {
        console.log('add');
    };
    Manage.prototype.showProduct = function () {
        console.log('show');
    };
    return Manage;
}());
exports.Manage = Manage;
