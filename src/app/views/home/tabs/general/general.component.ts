import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeService } from '../../services/home.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-general',
    imports: [TranslateModule, RouterModule],
    templateUrl: './general.component.html',
    styleUrl: './general.component.scss'
})
export class GeneralComponent implements OnInit {
  #homeService = inject(HomeService);

  translatePrefix = 'general.';

  basicMode = true;

  ngOnInit(): void {
    this.#homeService.basicMode$
      .pipe(
        tap((basic) => {
          this.basicMode = basic;
        }),
      )
      .subscribe();
  }
}
