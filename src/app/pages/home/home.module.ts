import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesModule } from 'src/app/core/categories/categories.module';
import { ProductsModule } from 'src/app/core/products/products.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CategoriesModule,
    CommonModule,
    HomeRoutingModule,
    ProductsModule,
    SharedModule,
  ],
})
export class HomeModule {}
