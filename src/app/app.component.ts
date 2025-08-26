import { Component } from '@angular/core';
import { LangService } from '@shared/lang/lang.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  constructor(private langService: LangService) {
    this.langService.setDefaultLang();
  }
}
