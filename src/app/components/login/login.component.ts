import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFacade } from './login-facade.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginForm } from '../../models/login.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  providers: [LoginFacade],
})
export class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly facade = inject(LoginFacade);

  // loginValid: boolean = true;

  readonly loginForm = this.formBuilder.group<LoginForm>({
    username: this.formBuilder.nonNullable.control('', [Validators.required]),
    password: this.formBuilder.nonNullable.control('', [Validators.required]),
  });

  onSubmit(): void {
    const formValue = this.loginForm.getRawValue();

    if (
      this.loginForm.invalid ||
      formValue.username === null ||
      formValue.password === null
    )
      return;

    // this.facade
    //   .login({ username: formValue.username, password: formValue.password })
    //   .subscribe({
    //     next: (response) => {
    //       this.loginValid = false;
    //       console.log('Login success', response.token);
    //     },
    //     error: (error) => {
    //       this.loginValid = false;
    //       console.log('Login error', error);
    //     },
    //   });
  }
}
