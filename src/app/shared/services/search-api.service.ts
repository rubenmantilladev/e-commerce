import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductResponse } from 'src/app/core/products/models/product.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  private API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  // Product list for search
  private productList$ = new BehaviorSubject<ProductResponse[]>([]);
  getProductList$(): Observable<ProductResponse[]> {
    return this.productList$.asObservable();
  }
  setProductList(productList: ProductResponse[]) {
    this.productList$.next(productList);
  }

  searchProductsApi(
    title = '',
    price_min = 0,
    price_max = 1000,
    categoryId?: number,
    page = 1,
    limit = 15
  ): Observable<ProductResponse[]> {
    const offset = (page - 1) * limit;
    const params = new HttpParams()
      .set('title', title.toLowerCase())
      .set('price_min', price_min)
      .set('price_max', price_max)
      .set('categoryId', categoryId ? categoryId.toString() : '')
      .set('offset', offset)
      .set('limit', limit);

    return this.http
      .get<ProductResponse[]>(`${this.API_URL}/products/`, {
        params,
      })
      .pipe(
        tap((res) => {
          this.setProductList(res);
        })
      );
  }
}
