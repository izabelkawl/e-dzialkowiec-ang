import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BaseLayoutComponent implements OnInit {
  #authServie = inject(AuthService);

  logged: boolean = false;

  ngOnInit(): void {
    this.#authServie.checkLogged().then((logged) => {
      this.logged = logged;
    });
    this.#authServie.userLogged$
      .pipe(
        tap((logged) => {
          this.logged = logged;
        }),
      )
      .subscribe();
  }
}
