import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryCardComponent],
  imports: [CommonModule],
  exports: [CategoryListComponent, CategoryCardComponent],
})
export class CategoriesModule {}
