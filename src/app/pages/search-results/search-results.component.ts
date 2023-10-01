import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/categories/models/category.model';
import { CategoryService } from 'src/app/core/categories/services/category.service';
import { ProductService } from 'src/app/core/products/services/product.service';
import { SearchHistoryService } from 'src/app/shared/services/search-history.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  price_min!: number;
  price_max!: number;
  categoryList?: Category[];
  productsLength!: number;
  limit = 15;
  page = 1;

  constructor(
    private searchHistorySvc: SearchHistoryService,
    private productSvc: ProductService,
    private categorySvc: CategoryService
  ) {}

  get listWords() {
    return this.searchHistorySvc.searchHistory;
  }

  ngOnInit(): void {
    this.categorySvc.getAllCategories().subscribe({
      next: (res) => {
        this.categoryList = res;
        this.categoryList.forEach((category) => {
          this.productSvc
            .getAllProductsByCategory(category.id)
            .subscribe((res) => {
              category.length = res.length;
            });
        });
      },
    });
  }

  handlePriceRangeChange($event: [number, number]) {
    this.price_min = $event[0];
    this.price_max = $event[1];
  }
  productsCount($event: number) {
    this.productsLength = $event;
  }

  moreProducts() {
    this.limit += 15;
  }

  nextPage() {
    if (this.page > this.productsLength / 15) {
      return;
    }
    this.page += 1;
    this.limit = 15;
  }

  prevPage() {
    if (this.page === 1) return;
    this.page -= 1;
    this.limit = 15;
  }

  searchWord(word: string) {
    this.searchHistorySvc.searchWord(word);
  }
}
