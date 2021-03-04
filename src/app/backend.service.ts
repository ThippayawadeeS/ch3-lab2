import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable ({
    providedIn: 'root'
})

export class BackendService {
    constructor () {}

    getProducts ():  Product[] {
        let Product = [
            {
              name:'Orange',
              price:111
            },
            {
              name:'WaterMelon',
              price:222
            },
            { name:'Coconut',
              price:555
            }
          ];
          return Product;
    }

    getProductById(productId:number): Product {
        return;
    }
}