import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'product', component: HomeComponent},
  {path: 'templateform', component: ProductFormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'product/detail/:id', component: DetailProductComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
