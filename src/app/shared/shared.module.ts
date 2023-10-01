import { CommonModule } from '@angular/common';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
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
    MenuComponent,
    SearchBoxComponent,
    SearchedTagComponent,
    CartComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SearchedTagComponent,
    CartComponent,
  ],
})
export class SharedModule {}
