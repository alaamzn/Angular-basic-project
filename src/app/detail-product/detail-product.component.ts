import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productToDisplay!: Product;
  productList!: Product[];
  
  constructor(private serviceRoute: ActivatedRoute, private serviceProduct: ProductService) { }

  ngOnInit(): void {
    console.log(this.serviceRoute.snapshot.params['id']);
    this.productList = this.serviceProduct.getProducts();
    
    console.log(this.productList);
    
       
   
    /*
    this.productToDisplay = this.productList.filter(p =>{
      if (p.id === this.serviceRoute.snapshot.params['id']){
        return p;
        
      }
    })*/

  }



}
