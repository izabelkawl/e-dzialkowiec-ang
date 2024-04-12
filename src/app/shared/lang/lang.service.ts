import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangType } from './lang.interface';
import { SessionStorageKeys } from '../enums/variables';

const { LANG } = SessionStorageKeys;

@Injectable({
  providedIn: 'root',
})
export class LangService {
  selectedLang: LangType | undefined = 'pl';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl'] as LangType[]);
  }

  setDefaultLang(): void {
    this.translate.setDefaultLang(this.lang);
  }

  changeLang(): void {
    this.selectedLang = this.oppositeTranslation;
    this.translate.setDefaultLang(this.selectedLang);

    try {
      sessionStorage?.setItem(LANG, this.selectedLang);
    } catch (e) {}
  }

  get lang(): LangType {
    try {
      return (sessionStorage?.getItem(LANG) ?? 'pl') as LangType;
    } catch (e) {
      return this.selectedLang ?? 'pl';
    }
  }

  get oppositeTranslation(): LangType {
    return this.lang === 'en' ? 'pl' : 'en';
  }
}
