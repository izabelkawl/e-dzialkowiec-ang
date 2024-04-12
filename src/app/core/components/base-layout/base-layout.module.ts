import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from 'src/app/views/home/modules/home.module';
import { BaseLayoutComponent } from './base-layout.component';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [BrowserModule, HomeModule, FormsModule, ReactiveFormsModule],
  exports: [BaseLayoutComponent],
})
export class BaseLayoutModule {}
