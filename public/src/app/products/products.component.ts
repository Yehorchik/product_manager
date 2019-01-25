import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getProducts()
  }
  getProducts(){
    this._httpService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }
  deleteProduct(id){
     this._httpService.deleteIt(id)
     .subscribe(results =>{
       this.getProducts()
     });
  }
}
