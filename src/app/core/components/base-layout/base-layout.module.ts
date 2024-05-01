import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '@app/views/home/modules/home.module';
import { BaseLayoutComponent } from './base-layout.component';
import { AdminPanelModule } from '@app/views/admin-panel/modules/admin-panel.module';
import { UserPanelModule } from '@app/views/user-panel/modules/user-panel.module';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    AdminPanelModule,
    UserPanelModule,
  ],
  exports: [BaseLayoutComponent],
})
export class BaseLayoutModule {}
