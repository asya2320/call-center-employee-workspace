import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public isMenuOpen: boolean = false;

    constructor(public authService: AuthService) {}

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenuWithNav() {
        this.toggleMenu();
    }
}
