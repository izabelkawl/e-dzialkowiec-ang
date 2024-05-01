import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, from, tap } from 'rxjs';
import {
  AuthenticationRequest,
  AuthenticationResponse,
  IUserData,
  PermissionsTypes,
} from './auth.models';
import { jwtDecode } from 'jwt-decode';
import { fakeAuthService } from '@app/http-client/auth-service';

@Injectable()
export class AuthService {
  private _loggedSubject = new BehaviorSubject<boolean>(false);
  private _accessTokenSubject = new BehaviorSubject<string>('');
  private _sessionTimeSubject = new BehaviorSubject<number>(0);
  private _permissionsSubject: BehaviorSubject<PermissionsTypes> =
    new BehaviorSubject<PermissionsTypes>('GUEST');

  private readonly SESSION_KEY_ACCESS_TOKEN = 'token';
  private readonly DEFAULT_LANG = 'lang';

  public get accessToken$(): string {
    return this._accessTokenSubject.getValue();
  }

  public get userLogged$(): Observable<boolean> {
    return this._loggedSubject.asObservable();
  }

  public get userPermissions(): PermissionsTypes {
    return this._permissionsSubject.getValue();
  }

  public get sessionTime$(): number {
    return this._sessionTimeSubject.getValue();
  }

  public login(credentials: AuthenticationRequest): Promise<IUserData> {
    return new Promise((resolve) => {
      from(fakeAuthService(credentials))
        .pipe(
          tap((response: AuthenticationResponse) => {
            const { jwt } = response;
            const data: IUserData = jwtDecode(jwt);
            const iat: number = Date.parse(new Date().toString());

            this._permissionsSubject.next(data.role);
            this._accessTokenSubject.next(jwt);
            this._sessionTimeSubject.next(iat);
            this._loggedSubject.next(true);

            this.setSessionData(jwt);

            resolve(data);
          }),
          catchError((eror) => {
            alert(eror);
            throw eror;
          }),
        )
        .subscribe();
    });
  }

  public logout(): void {
    this._permissionsSubject.next('GUEST');
    this._accessTokenSubject.next('');
    this._sessionTimeSubject.next(0);
    this._loggedSubject.next(false);
    this.setSessionData('');
  }

  public decodeToken(token: string): any {
    return jwtDecode(token);
  }

  setSessionData(jwt: string): any {
    sessionStorage.setItem(this.SESSION_KEY_ACCESS_TOKEN, jwt);
    sessionStorage.setItem(this.DEFAULT_LANG, 'pl');
  }

  checkLogged(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = sessionStorage.getItem(this.SESSION_KEY_ACCESS_TOKEN);
      if (token) resolve(this.decodeToken(token));
      resolve(false);
    });
  }
}
