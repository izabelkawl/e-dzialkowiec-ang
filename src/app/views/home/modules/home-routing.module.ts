import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from '../tabs/management/management.component';
import { GeneralComponent } from '../tabs/general/general.component';
import { GardenComponent } from '../tabs/garden/garden.component';
import { ContactComponent } from '../tabs/contact/contact.component';
import { LoginRegisterComponent } from '../tabs/login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'garden',
    component: GardenComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginRegisterComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
