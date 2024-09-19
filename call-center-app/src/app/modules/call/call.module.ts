import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallListComponent } from '../../components/call-list/call-list.component';
import { CallSimulatorComponent } from '../../components/call-simulator/call-simulator.component';
import { CallService } from '../../services/call/call.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [CallListComponent, CallSimulatorComponent],
    imports: [CommonModule, SharedModule],
    providers: [CallService],
    exports: [CallListComponent, CallSimulatorComponent],
})
export class CallModule {}
