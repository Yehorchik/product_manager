import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute,  Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any={
    title : "",
    price :0,
    imageUrl : ""
  }
  
  constructor(private _httpService:HttpService,
    private _route: ActivatedRoute,) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.findProduct(params['id']);
    
   });
  }
   findProduct(id){
     let observable = this._httpService.findOne(id)
     observable.subscribe(results =>{
       this.product=results;
     })
   }

   updateProduct(id){
     let observable = this._httpService.updateOne(id,this.product)
     observable.subscribe(results =>{
       this.product ={
         title:"",
         price : 0,
         imageUrl :""
       }
     })
   }
   deleteProduct(id){
    this._httpService.deleteIt(id)
    .subscribe(results =>{
      console.log(results);
      this.product ={
        title:"",
        price : 0,
        imageUrl :""
      }
    })
  }

}
