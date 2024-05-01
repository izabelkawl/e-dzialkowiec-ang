import { NgModule } from '@angular/core';
import { GardenComponent } from '../tabs/garden/garden.component';
import { ContactComponent } from '../tabs/contact/contact.component';
import { GeneralComponent } from '../tabs/general/general.component';
import { ManagementComponent } from '../tabs/management/management.component';
import { HomeComponent } from '../home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRegisterService } from '../tabs/login-register/services/login-register.service';
import { LoginRegisterModule } from '../tabs/login-register/login-register.module';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    GardenComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forRoot([]),
    GeneralComponent,
    LoginRegisterModule,
    ButtonComponent,
    ManagementComponent,
  ],
  exports: [HomeComponent],
  providers: [LoginRegisterService],
})
export class HomeModule {}
