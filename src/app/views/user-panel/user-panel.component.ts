import { Component, inject } from '@angular/core';
import { AuthService } from '@app/shared/services/auth/auth.service';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrl: './user-panel.component.scss',
    standalone: false
})
export class UserPanelComponent {
  #authServie = inject(AuthService);

  logout(): void {
    this.#authServie.logout();
  }
}
