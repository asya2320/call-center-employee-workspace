import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

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
}
