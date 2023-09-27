import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
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
