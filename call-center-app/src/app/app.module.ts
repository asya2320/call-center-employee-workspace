import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { CallModule } from './modules/call/call.module';
import { FormatDatePipe } from './pipes/format-date/format-date.pipe';
import { FormatSecondsPipe } from './pipes/format-seconds/format-seconds.pipe';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        SharedModule,
        CallModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
