import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct :any={
      title : "",
      price : 0,
      imageUrl : ""
  }
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }
   createProduct(){
     let observable = this._httpService.createOne(this.newProduct);
     observable.subscribe(results =>{
       console.log(results);
       this.newProduct ={
         title:"",
         price : 0,
         imageUrl:""
       }
     })
   }
}
