import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    register(login: string, password: string): void {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('login');
    }
}
