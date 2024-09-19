import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallSimulatorComponent } from './components/call-simulator/call-simulator.component';
import { CallListComponent } from './components/call-list/call-list.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    {
        path: 'simulator',
        component: CallSimulatorComponent,
        canActivate: [AuthGuard],
    },
    { path: 'list', component: CallListComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
