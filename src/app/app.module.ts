import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader, TranslateHttpLoaderConfig } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BaseLayoutModule } from '@core/components/base-layout/base-layout.module';

const translateHttpLoaderConfig: TranslateHttpLoaderConfig = {
  prefix: './assets/i18n/',
  suffix: '.json',
  enforceLoading: false,
  useHttpBackend: false
};

@NgModule({ 
    declarations: [AppComponent],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BaseLayoutModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        {
        provide: TRANSLATE_HTTP_LOADER_CONFIG,
        useValue: translateHttpLoaderConfig,
        },
    ],})
export class AppModule {}


export function HttpLoaderFactory(): TranslateHttpLoader {
  return new TranslateHttpLoader();
}
