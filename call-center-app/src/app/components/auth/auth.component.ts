import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
})
export class AuthComponent {
    login: string = '';
    password: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    onSubmit() {
        this.authService.register(this.login, this.password);
        this.router.navigate(['simulator']);
    }
}
