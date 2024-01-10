import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomHttpInterceptor } from './utilities/http.interceptor';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideHttpClient(withFetch()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomHttpInterceptor,
    //   multi: true
    // },
  ]
};
