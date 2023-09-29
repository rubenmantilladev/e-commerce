import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';
import { UserCreate } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      avatar: new FormControl(
        'https://api.lorem.space/image/face?w=640&h=480&r=867'
      ),
    },
    { validators: [CustomValidators.passwordsMatching] }
  );

  constructor(
    private userSvc: UserService,
    private router: Router,
    private notifySvc: NotifyService
  ) {}

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      // TODO: Show notification error message to user
      return;
    }

    const user = this.registerForm.value;
    const newUser: UserCreate = {
      name: `${user.name} ${user.lastname}`,
      email: user.email,
      password: user.password,
      avatar: user.avatar,
    };

    this.userSvc.registerUser(newUser).subscribe({
      next: () => {
        console.log('User created successfully... in service');
        // TODO: Show notification success message to user
      },
      error: () => {
        this.notifySvc.error('Fallo al crear usuario', 'Intente de nuevo');
      },
      complete: () => {
        this.notifySvc.success('Usuario creado', 'Registro exitoso');
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
