import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRegisterService } from './login-register.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import {
  ILoginForm,
  ILoginRegisterFormConfig,
  IRegisterForm,
  PageType,
} from './login-register.models';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss',
})
export class LoginRegisterComponent implements OnInit {
  #router = inject(Router);

  pageType: PageType = 'login';

  form?: FormGroup<ILoginForm> | FormGroup<IRegisterForm>;

  formConfig: ILoginRegisterFormConfig[] = [];

  translatePrefix = {
    common: 'loginRegister.',
    form: 'loginRegister.form.',
    placeholder: 'loginRegister.form.placeholder.',
  }

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
      this.loginRegisterService
        .login(email, password)
        .pipe(
          tap((data) => {
            alert('Zalogowano');
          })
        )
        .subscribe();
    }
  }

  get pageTypeLogin(): boolean {
    return this.pageType === 'login';
  }
}
