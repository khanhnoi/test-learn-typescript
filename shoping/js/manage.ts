import { Product } from './product'

export class Manage {
    private store : Product[] = [];

    constructor() {
    }
    getProducts ():Product[] {
        return [];
    }
    getProductById(id: Number) :Product {
        let product = new Product(1,"p1", 100,'info', true, 'imageLink');
        return product;
    }
    addProduct():void {
        console.log('add');
    }
    showProduct():void {
        console.log('show');
    }
}