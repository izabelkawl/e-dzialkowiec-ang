import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { UserPaneRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from '../user-panel.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [
    UserPaneRoutingModule,
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forRoot([]),
    ButtonComponent,
  ],
  exports: [UserPanelComponent],
  providers: [],
})
export class UserPanelModule {}
