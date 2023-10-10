import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'category-list',
  template: `
    <div class="flex-container">
      <category-card
        *ngFor="let category of categoryList | slice: 0 : 4"
        [category]="category"
      ></category-card>
    </div>
  `,
  styles: [
    `
      .flex-container {
        display: grid;
        grid-template-columns: repeat(4, 269px);
        grid-auto-rows: minmax(269px, auto);
        gap: 1.5rem;
        justify-content: center;
      }
    `,
  ],
})
export class CategoryListComponent implements OnInit {
  categoryList!: Category[];

  constructor(private categorySvc: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categorySvc.getAllCategories().subscribe({
      next: () => {
        this.categorySvc.getCategoryList$().subscribe({
          next: (res) => {
            this.categoryList = res;
          },
        });
      },
      error: (err) => console.log(err),
    });
  }
}
