import { ProductResponse } from 'src/app/core/products/models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-by-category',
  template: `
    <div class="flex-container">
      <product-card
        *ngFor="let product of categoryProductList"
        [product]="product"
      ></product-card>
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
export class ProductsByCategoryComponent implements OnInit {
  categoryProductList!: ProductResponse[];

  @Input() categoryId!: number;
  @Input() page!: number;
  @Input() limit!: number;

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.getProductsByCategoryPage(this.categoryId, this.page, this.limit);
  }

  getProductsByCategoryPage(categoryId = 1, page = 1, limit = 15) {
    this.productSvc
      .getProductsByCategoryPage(categoryId, page, limit)
      .subscribe({
        next: (res) => {
          this.categoryProductList = res;
        },
        error: (err) => console.log(err),
      });
  }
}
