import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ProductDetailsComponent, CarouselComponent],
  imports: [CommonModule, ProductDetailsRoutingModule],
})
export class ProductDetailsModule {}
