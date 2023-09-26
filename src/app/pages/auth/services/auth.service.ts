import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { UserCreate, UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  registerUser(user: UserCreate): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.API_URL}/users/`, user, {
      headers: this.headers,
    });
  }

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, user, {
      headers: this.headers,
    });
  }
}
