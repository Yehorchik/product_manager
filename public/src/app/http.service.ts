import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/api/products');
  }
  deleteIt(id){
    return this._http.delete('/api/products/'+id);
  }
  createOne(product){
    return this._http.post('/api/products',product);
  }
  findOne(id){
    return this._http.get('/api/products/'+id);
  }
  updateOne(id,product){
    console.log(id ,product);
    return this._http.put('/api/products/'+id , product);
  }
}
