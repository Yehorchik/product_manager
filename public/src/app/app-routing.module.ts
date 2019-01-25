import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path : 'new' , component : NewComponent },
  { path : 'products/:id' , component : ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
