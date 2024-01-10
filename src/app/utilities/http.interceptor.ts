import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    private apiUrlPrefix = "http://127.0.0.1:5000/";

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            url: `${this.apiUrlPrefix}${request.url}`,
            withCredentials: true,
        });

        return next.handle(modifiedRequest);
    }
}
