import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CompositionComponent } from './tabs/composition/composition.component';
import { ManagementInfoComponent } from './tabs/management-info/management-info.component';
import { NewsComponent } from './tabs/news/news.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TabsComponent } from '@app/shared/components/tabs/tabs.component';
import { ITab } from '@app/shared/components/tabs/models/tabs.models';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [TranslateModule, ButtonComponent, TabsComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent {
  tabsConfig: ITab[] = [
    {
      title: 'news',
      component: NewsComponent,
    },
    {
      title: 'managementInfo',
      component: ManagementInfoComponent,
    },
    {
      title: 'composition',
      component: CompositionComponent,
    },
  ];
}
