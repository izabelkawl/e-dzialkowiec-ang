import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRegisterComponent } from './login-register.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '@shared/services/auth/auth.service';

@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    RouterModule,
    TranslateModule,
  ],
  exports: [],
  providers: [AuthService],
})
export class LoginRegisterModule {}
