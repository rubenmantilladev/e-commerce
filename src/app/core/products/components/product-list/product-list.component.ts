import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  template: `
    <div class="flex-container">
      <product-card
        *ngFor="let product of productList"
        [product]="product"
      ></product-card>
    </div>
  `,
  styles: [
    `
      .flex-container {
        display: grid;
        grid-template-columns: repeat(3, 269px);
        grid-auto-rows: minmax(269px, auto);
        gap: 1.5rem;
        justify-content: center;
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {
  @Input() page!: number;
  @Input() limit!: number;
  productList!: ProductResponse[];

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.getProducts(this.page, this.limit);
  }

  getProducts(page = 1, limit = 4) {
    this.productSvc.getPageProducts(page, limit).subscribe({
      next: (res) => {
        this.productList = res;
        console.log(res);
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  showSearchedResults(cases: string, word: string) {
    console.log(cases, word);
  }
}
