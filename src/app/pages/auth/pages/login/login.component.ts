import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notify.service';

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
    private router: Router,
    private notifySvc: NotifyService
  ) {}

  get f() {
    return this.loginForm;
  }

  onLogin() {
    if (this.f.invalid) {
      // TODO: Show notification error message to user
      console.log('Invalid form');
      return;
    }

    const userLogin: Login = this.f.value;

    this.authSvc.login(userLogin as Login).subscribe({
      next: () => {
        this.notifySvc.success('Inicio de sesión exitoso', 'Bienvenido');
        this.router.navigate(['/']);
      },
      error: (err) => {
        // TODO: Show notification error message to user
        this.notifySvc.error('Fallo al iniciar sesión', 'Intente de nuevo');
        console.log(err.message);
      },
    });
  }
}
