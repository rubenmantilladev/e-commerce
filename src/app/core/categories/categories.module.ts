import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CategoryListComponent, CategoryCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CategoryListComponent, CategoryCardComponent],
  providers: [CategoryService],
})
export class CategoriesModule {}
