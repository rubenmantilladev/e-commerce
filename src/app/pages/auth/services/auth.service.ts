import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { UserResponse } from '../models/user.model';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Login, LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private user?: UserResponse;
  private userLoggedIn = new BehaviorSubject<boolean>(false);

  getUserLoggedInStatus(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
  setUserLoggedInStatus(isLoggedIn: boolean) {
    this.userLoggedIn.next(isLoggedIn);
  }

  get currentUser(): UserResponse | undefined {
    return structuredClone(this.user);
  }

  constructor(private http: HttpClient) {}

  headerJson = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  headerToken = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  login(user: Login): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.API_URL}/auth/login`, user, {
        headers: this.headerJson,
      })
      .pipe(
        tap((res: LoginResponse) => {
          if (res) {
            localStorage.setItem('token', res.access_token);
            localStorage.setItem('refreshToken', res.refresh_token);
          }
        }),
        tap(() => this.setUserLoggedInStatus(true))
      );
  }

  // TODO: Use this method to get user data
  getUserWithSesion(): Observable<UserResponse | undefined> {
    return this.http
      .get<UserResponse>(`${this.API_URL}/auth/profile`, {
        headers: this.headerToken,
      })
      .pipe(
        tap((res: UserResponse) => {
          this.user = res;
        })
      );
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<LoginResponse>(
      `${this.API_URL}/auth/refresh-token`,
      { refreshToken },
      {
        headers: this.headerJson,
      }
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
    this.setUserLoggedInStatus(false);
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    return this.http
      .get<UserResponse>(`${this.API_URL}/auth/profile`, {
        headers: this.headerToken,
      })
      .pipe(
        tap((user) => (this.user = user)),
        map((user) => !!user),
        catchError(() => of(false))
      );
  }
}
