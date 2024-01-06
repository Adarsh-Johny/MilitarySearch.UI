import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './utilities/http.interceptor';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [HttpClientModule, CommonModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true,
            deps: [{ provide: 'API_URL_PREFIX', useValue: 'http://127.0.0.1:5000/' }],
        },
    ],
})
export class AppModule { }