import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  Category,
  CategoryCreateRequest,
  CategoryUpdateRequest,
} from '../models/category.model';
import { ProductResponse } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`);
  }

  createCategory(category: CategoryCreateRequest): Observable<Category> {
    return this.http.post<Category>(`${this.API_URL}/categories`, category);
  }

  updatedCategory(category: CategoryUpdateRequest): Observable<Category> {
    const { id, ...rest } = category;
    return this.http.put<Category>(`${this.API_URL}/categories/${id}`, rest);
  }

  deleteCategory(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/categories/${id}`);
  }

  getAllProductsByCategory(id: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `${this.API_URL}/categories/${id}/products`
    );
  }
}
