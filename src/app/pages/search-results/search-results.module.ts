import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { PriceRangeSelectorComponent } from './components/price-range-selector/price-range-selector.component';
import { ProductsModule } from 'src/app/core/products/products.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchResultsComponent, PriceRangeSelectorComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    ProductsModule,
    FormsModule,
    SharedModule,
  ],
})
export class SearchResultsModule {}
