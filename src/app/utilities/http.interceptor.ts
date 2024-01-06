import { Injectable, Inject } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    private apiUrlPrefix: string;

    constructor(@Inject('API_URL_PREFIX') apiUrlPrefix: string) {
        this.apiUrlPrefix = apiUrlPrefix;
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            url: `${this.apiUrlPrefix}${request.url}`,
            setHeaders: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            },
            withCredentials: true,
        });

        return next.handle(modifiedRequest);
    }
}
