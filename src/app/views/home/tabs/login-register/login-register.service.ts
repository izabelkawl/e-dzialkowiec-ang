import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { fakeAuthService } from '../../../../http-client/auth-service';
import { ILoginRegisterFormConfig } from './login-register.models';

@Injectable()
export class LoginRegisterService {
  login(userName: string, password: string): Observable<any> {
    return from(fakeAuthService(userName, password));
  }

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
