import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  headersJson = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  headersToken = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, user, {
      headers: this.headersJson,
    });
  }

  getUserWithSesion(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}/auth/profile`, {
      headers: this.headersToken,
    });
  }

  checkEmail(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.API_URL}/users/is-available`, email);
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<LoginResponse>(
      `${this.API_URL}/auth/refresh-token`,
      { refreshToken },
      {
        headers: this.headersJson,
      }
    );
  }
}
