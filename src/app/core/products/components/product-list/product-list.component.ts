import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductResponse } from '../../models/product.model';
import { SearchApiService } from 'src/app/shared/services/search-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-list',
  template: `
    <div class="flex-container">
      <product-card
        *ngFor="let product of productList | sortBy: sortBy"
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
export class ProductListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title!: string;
  @Input() price_min!: number;
  @Input() price_max!: number;
  @Input() categoryId!: number;
  @Input() page!: number;
  @Input() limit!: number;
  @Input() sortBy!: keyof ProductResponse;
  productList!: ProductResponse[];

  private subscription!: Subscription;
  constructor(private searchApiSvc: SearchApiService) {}

  ngOnInit(): void {
    this.searchResultsApi(
      this.title,
      this.price_min,
      this.price_max,
      this.categoryId,
      this.page,
      this.limit
    );
    this.getProducts();
  }

  ngOnChanges(change: SimpleChanges) {
    if (
      change['title'] ||
      change['price_min'] ||
      change['price_max'] ||
      change['categoryId'] ||
      change['page'] ||
      change['limit']
    ) {
      this.searchResultsApi(
        this.title,
        this.price_min,
        this.price_max,
        this.categoryId,
        this.page,
        this.limit
      );
    }
  }

  ngOnDestroy(): void {
    this.searchApiSvc.setProductList([]);
    this.subscription.unsubscribe();
  }

  getProducts() {
    this.subscription = this.searchApiSvc.getProductList$().subscribe({
      next: (res) => {
        this.productList = res;
      },
    });
  }

  searchResultsApi(
    title: string,
    price_min: number,
    price_max: number,
    categoryId: number,
    page: number,
    limit: number
  ) {
    this.searchApiSvc
      .searchProductsApi(title, price_min, price_max, categoryId, page, limit)
      .subscribe({
        next: (res) => {
          this.searchApiSvc.setProductList(res);
        },
        error: (err) => console.log(err),
      });
  }
}
