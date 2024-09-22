import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
    login: string = '';
    password: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('password'))
            localStorage.removeItem('password');
        if (localStorage.getItem('login')) localStorage.removeItem('login');
    }

    onSubmit() {
        this.authService.register(this.login, this.password);
        this.router.navigate(['simulator']);
    }
}
