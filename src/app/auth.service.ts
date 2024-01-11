import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isAuthenticated: boolean = false;

    setAuthentication(isAuthenticated: boolean): void {
        this.isAuthenticated = isAuthenticated;
    }

    logout(): void {
        this.isAuthenticated = false;
    }

    get isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }
}
