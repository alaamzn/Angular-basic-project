import { Product } from './../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product!: Product;
  @Input() priceMaxInput!: number;

  
  @Output() notification = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendNotif(){
    this.notification.emit(this.product);
    console.log("sendNotif() called ");
    console.log(this.product);
    console.log(this.notification);
  }

}
