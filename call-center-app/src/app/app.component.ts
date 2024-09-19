import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'call-center-app';
}
