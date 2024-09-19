import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../../components/auth/auth.component';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule],
    providers: [AuthService],
    exports: [AuthComponent],
})
export class AuthModule {}
