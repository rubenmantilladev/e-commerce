import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchApiService } from 'src/app/shared/services/search-api.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
    SortByPipe,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ProductCardComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
  ],
  providers: [ProductService, SearchApiService],
})
export class ProductsModule {}
