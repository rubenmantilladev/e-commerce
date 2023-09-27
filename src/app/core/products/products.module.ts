import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductCardComponent, ProductListComponent],
  providers: [ProductService],
})
export class ProductsModule {}
