import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'product/:id', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: 'product/:id' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsRoutingModule {}
