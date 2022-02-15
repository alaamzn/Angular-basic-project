import { StatsService } from './../services/stats.service';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentTitle!: string;
  priceMax!: number;
  hideForm!: boolean;
  productsList!: Product [];
  productsStatNum!: number;

  constructor(private serviceProduct: ProductService, private serviceStats: StatsService) { }

  ngOnInit(): void {
    this.componentTitle = 'Home component';
    this.hideForm = true;
    this.productsList = this.serviceProduct.getProducts();
  }

  incrementLike(product: Product){
    let id = this.productsList.indexOf(product);
    this.productsList[id].like++;
  }

  pushProduct(product: Product){
    
    this.productsList.push(product);
    this.hideForm = true;
  }

  showForm(){
    this.hideForm = false;
  }

  showStats(){
     this.productsStatNum = this.serviceStats.getStats(this.productsList, 'quantity', 0);
     console.log(this.productsStatNum);
  }

}
