import { Injectable } from '@angular/core';
import { ILoginRegisterFormConfig } from '../models/login-register.models';

@Injectable()
export class LoginRegisterService {
  get loginForm(): ILoginRegisterFormConfig[] {
    return [
      {
        formControlName: 'email',
      },
      {
        formControlName: 'password',
        type: 'password',
      },
    ];
  }

  get registerForm(): ILoginRegisterFormConfig[] {
    return [
      {
        formControlName: 'email',
      },
      {
        formControlName: 'firtsName',
      },
      {
        formControlName: 'lastName',
      },
      {
        formControlName: 'password',
        type: 'password',
      },
      {
        formControlName: 'passwordCopy',
        type: 'password',
      },
    ];
  }
}
