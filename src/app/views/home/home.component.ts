import { Component, inject } from '@angular/core';
import { TabTypes } from './models/home.models';
import { LangService } from '@shared/lang/lang.service';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #langService = inject(LangService);
  #homeService = inject(HomeService);

  navConfig: TabTypes[] = ['general', 'management', 'garden', 'contact'];

  basic = true;

  changeColor(): void {
    this.basic = !this.basic;
    document.documentElement.style.setProperty(
      '--base-color',
      this.basic ? '#0071bc' : '#E0218A',
    );
    this.#homeService.basicMode$.next(this.basic);
  }

  changeLang(): void {
    this.#langService.changeLang();
  }

  get langTitle(): string {
    return this.#langService.lang;
  }
}
