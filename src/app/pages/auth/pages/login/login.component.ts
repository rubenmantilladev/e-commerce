import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('dasahyhecu@mailinator.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('Passw0rd', [Validators.required]),
  });

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  get f() {
    return this.loginForm;
  }

  onSubmit() {
    if (this.f.invalid) {
      // TODO: Show notification error message to user
      console.log('Invalid form');
      return;
    }

    const userLogin: Login = this.f.value;

    this.authSvc.login(userLogin as Login).subscribe({
      next: (res) => {
        // TODO: Show notification success message to user
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('refreshToken', res.refresh_token);
      },
      error: (err) => {
        // TODO: Show notification error message to user
        console.log(err.message);
      },
      complete: () => {
        // TODO: Show notification success message to user
        console.log('Login successfully... complete service');
        this.router.navigate(['/']);
      },
    });
  }
}
