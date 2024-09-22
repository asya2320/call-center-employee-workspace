import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
