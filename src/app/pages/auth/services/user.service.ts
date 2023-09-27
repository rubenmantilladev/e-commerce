import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserCreate, UserResponse } from '../models/user.model';
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
}
