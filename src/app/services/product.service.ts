import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  productsList!: Product[];

  constructor() { }

  //Share data
  getProducts(){
    this.productsList = [
      {id: 1, title: 'T-shirt 1', price: 20, quantity: 10, like: 0},
      {id: 2, title: 'T-shirt 2', price: 10, quantity: 0, like: 0},
      {id: 3, title: 'T-shirt 3', price: 120, quantity: 0, like: 0}
    ];

    return this.productsList;
  }

  getProductById(id: number){
    return this.productsList.find(p => p.id == id);
  }


}
