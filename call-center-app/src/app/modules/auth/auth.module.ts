import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../../components/auth/auth.component';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule],
    providers: [AuthService],
    exports: [AuthComponent],
})
export class AuthModule {}
