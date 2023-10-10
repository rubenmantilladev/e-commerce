import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  Category,
  CategoryCreateRequest,
  CategoryUpdateRequest,
} from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  // Category list for search
  private categoryList$ = new BehaviorSubject<Category[]>([]);
  getCategoryList$(): Observable<Category[]> {
    return this.categoryList$.asObservable();
  }
  setCategoryList(categoryList: Category[]) {
    this.categoryList$.next(categoryList);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`).pipe(
      tap((res) => {
        this.setCategoryList(res);
      })
    );
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
}
