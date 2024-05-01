import { NgModule } from '@angular/core';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel.component';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forRoot([]),
  ],
  exports: [AdminPanelComponent],
  providers: [],
})
export class AdminPanelModule {}
