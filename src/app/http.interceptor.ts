// http.interceptor.ts

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
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Add a custom header to each request
        const modifiedRequest = request.clone({
            setHeaders: {
                'X-Custom-Header': 'CustomHeaderValue',
            },
        });
        // Pass the modified request to the next handler
        return next.handle(modifiedRequest);
    }
}
