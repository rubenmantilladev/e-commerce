import { CommonModule } from '@angular/common';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchedTagComponent } from './components/searched-tag/searched-tag.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    SearchBoxComponent,
    SearchedTagComponent,
    CartComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    SearchedTagComponent,
    CartComponent,
  ],
})
export class SharedModule {}
