import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  ProductCreateRequest,
  ProductCreateResponse,
  ProductResponse,
  ProductUpdateRequest,
} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  private showDetails = new BehaviorSubject<boolean>(false);
  getShowDetails(): Observable<boolean> {
    return this.showDetails.asObservable();
  }
  setShowDetails(value: boolean) {
    this.showDetails.next(value);
  }

  headersJson = new Headers({
    'Content-Type': 'application/json',
  });

  getAllProducts(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.API_URL}/products`);
  }

  getProductById(id: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.API_URL}/products/${id}`);
  }

  createProduct(
    product: ProductCreateRequest
  ): Observable<ProductCreateResponse> {
    return this.http.post<ProductCreateResponse>(
      `${this.API_URL}/products`,
      product
    );
  }

  updateProduct(
    productUpdate: ProductUpdateRequest
  ): Observable<ProductCreateResponse> {
    const { id, ...rest } = productUpdate;
    return this.http.put<ProductCreateResponse>(
      `${this.API_URL}/products/${id}`,
      rest
    );
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/products/${id}`);
  }

  getPageProducts(page: number, limit = 12): Observable<ProductResponse[]> {
    const offset = (page - 1) * limit;
    return this.http.get<ProductResponse[]>(
      `${this.API_URL}/products?offset=${offset}&limit=${limit}`
    );
  }

  // category products
  getAllProductsByCategory(id: number): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(
      `${this.API_URL}/categories/${id}/products`
    );
  }

  // category products with pagination
  getProductsByCategoryPage(categoryId: number, page = 1, limit = 12) {
    const offset = (page - 1) * limit;
    return this.http.get<ProductResponse[]>(
      `${this.API_URL}/categories/${categoryId}/products?offset=${offset}&limit=${limit}`
    );
  }
}
