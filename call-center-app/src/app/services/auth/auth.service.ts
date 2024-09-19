import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loginSubject = new BehaviorSubject<string | null>(null);
    login$ = this.loginSubject.asObservable();

    constructor() {
        const login = localStorage.getItem('login');
        if (login) {
            this.loginSubject.next(login);
        }
    }

    register(login: string, password: string): void {
        localStorage.setItem('login', login);
        this.loginSubject.next(login);
        localStorage.setItem('password', password);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('login');
    }

    logout(): void {
        this.loginSubject.next(null);
    }
}
