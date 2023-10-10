import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CheckEmail, UserCreate, UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  headersJson = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  registerUser(user: UserCreate): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.API_URL}/users/`, user, {
      headers: this.headersJson,
    });
  }

  // TODO: User this method to check if email is available
  checkEmail(email: CheckEmail): Observable<boolean> {
    return this.http.post<boolean>(`${this.API_URL}/users/is-available`, email);
  }
}
