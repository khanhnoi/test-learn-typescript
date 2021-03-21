import { Product } from  "./product";

class ProductCart {
    private product :Product;
    private amount: number;
    constructor( product :Product, amount: number = 1) {
        this.product = product;
        this.amount = amount;
    }
    calculatePrice ():Number {
         return;
    }
    showProductCart(): String {
         return;
    }
}