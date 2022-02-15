import { Product } from './../models/product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  product!: Product;
  
  @Output() eventSaveProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }

  save(){
    this.product.like = 0;
    this.eventSaveProduct.emit(this.product);
  }

}
