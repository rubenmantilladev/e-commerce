import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authSvc.checkAuthentication().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('/auth/login');
        }
      })
    );
  }

  canActivate(): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}
