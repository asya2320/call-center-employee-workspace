import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CallSimulatorComponent } from './components/call-simulator/call-simulator.component';
import { CallListComponent } from './components/call-list/call-list.component';

@NgModule({
    declarations: [AppComponent, CallSimulatorComponent, CallListComponent],
    imports: [BrowserModule, AppRoutingModule, AuthModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
