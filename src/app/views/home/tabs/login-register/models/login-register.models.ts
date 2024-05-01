import { FormControl } from '@angular/forms';

export interface ILoginRegisterFormConfig {
  formControlName: string;
  type?: string;
}

export interface ILoginForm {
  email: FormControl;
  password: FormControl;
}

export interface IRegisterForm {
  email: FormControl;
  firtsName: FormControl;
  lastName: FormControl;
  password: FormControl;
  passwordCopy: FormControl;
}

export type PageType = 'login' | 'register';
