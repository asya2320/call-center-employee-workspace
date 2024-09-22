import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CallListComponent } from '../../components/call-list/call-list.component';
import { CallSimulatorComponent } from '../../components/call-simulator/call-simulator.component';
import { CallService } from '../../services/call/call.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormatDatePipe } from '../../pipes/format-date/format-date.pipe';
import { FormatSecondsPipe } from '../../pipes/format-seconds/format-seconds.pipe';

@NgModule({
    declarations: [
        CallListComponent,
        CallSimulatorComponent,
        FormatDatePipe,
        FormatSecondsPipe,
    ],
    imports: [CommonModule, SharedModule, FormsModule],
    providers: [CallService, DatePipe],
    exports: [
        CallListComponent,
        CallSimulatorComponent,
        FormatDatePipe,
        FormatSecondsPipe,
    ],
})
export class CallModule {}
