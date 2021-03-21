"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    // public set id(v : Number) {
    //     this.id = v;
    // }
    function Product(id, name, price, description, status, image) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._status = status;
        this._image = image;
    }
    //id
    Product.prototype.id = function () {
        return this._id;
    };
    Product.prototype.setId = function (v) {
        this._id = v;
    };
    //name
    Product.prototype.name = function () {
        return this._name;
    };
    Product.prototype.setName = function (v) {
        this._name = v;
    };
    //price
    Product.prototype.price = function () {
        return this._price;
    };
    Product.prototype.setPrice = function (v) {
        this._price = v;
    };
    //status
    Product.prototype.status = function () {
        return this._status;
    };
    Product.prototype.setStatus = function (v) {
        this._status = v;
    };
    //description
    Product.prototype.description = function () {
        return this._description;
    };
    Product.prototype.setDescription = function (v) {
        this._description = v;
    };
    //image
    Product.prototype.image = function () {
        return this._image;
    };
    Product.prototype.setImage = function (v) {
        this._image = v;
    };
    return Product;
}());
exports.Product = Product;
