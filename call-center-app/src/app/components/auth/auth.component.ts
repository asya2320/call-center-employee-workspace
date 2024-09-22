import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    authForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        this.authForm = this.formBuilder.group({
            login: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {
        localStorage.removeItem('password');
        localStorage.removeItem('login');
    }

    onSubmit() {
        if (this.authForm.valid) {
            this.authService.register(
                this.authForm.value.login,
                this.authForm.value.password,
            );
            this.router.navigate(['simulator']);
        }
    }
}
