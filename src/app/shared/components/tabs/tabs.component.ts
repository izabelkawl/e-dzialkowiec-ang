import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { ITab } from './models/tabs.models';

@Component({
    selector: 'app-tabs',
    imports: [CommonModule, TranslateModule, ButtonComponent],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabsConfig: ITab[] = [];

  activeTablIndex: number = 0;

  changeTabIndex(index: number): void {
    this.activeTablIndex = index;
  }
}
