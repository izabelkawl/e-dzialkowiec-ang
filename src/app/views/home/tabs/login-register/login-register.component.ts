import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRegisterService } from './services/login-register.service';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import {
  ILoginForm,
  ILoginRegisterFormConfig,
  IRegisterForm,
  PageType,
} from './models/login-register.models';

@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrl: './login-register.component.scss',
    standalone: false
})
export class LoginRegisterComponent implements OnInit {
  #router = inject(Router);
  #authService = inject(AuthService);

  pageType: PageType = 'login';

  form?: FormGroup<ILoginForm> | FormGroup<IRegisterForm>;

  formConfig: ILoginRegisterFormConfig[] = [];

  translatePrefix = {
    common: 'loginRegister.',
    form: 'loginRegister.form.',
    placeholder: 'loginRegister.form.placeholder.',
  };

  constructor(private loginRegisterService: LoginRegisterService) {
    this.pageType = this.#router.url.split('/').pop() as PageType;
  }

  ngOnInit(): void {
    const { loginForm, registerForm } = this.loginRegisterService;

    this.form = this.pageTypeLogin
      ? new FormGroup({
          email: new FormControl(),
          password: new FormControl(),
        })
      : new FormGroup({
          email: new FormControl(),
          firtsName: new FormControl(),
          lastName: new FormControl(),
          password: new FormControl(),
          passwordCopy: new FormControl(),
        });

    this.formConfig = this.pageTypeLogin ? loginForm : registerForm;
  }

  submitForm(): void {
    if (this.form) {
      const { email, password } = this.form.value;
      this.#authService.login({ email, password }).then((data) => {
        console.log(data);
      });
    }
  }

  get pageTypeLogin(): boolean {
    return this.pageType === 'login';
  }
}
