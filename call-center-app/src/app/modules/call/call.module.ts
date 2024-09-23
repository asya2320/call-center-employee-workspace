import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CallListComponent } from '../../components/call-list/call-list.component';
import { CallSimulatorComponent } from '../../components/call-simulator/call-simulator.component';
import { CallService } from '../../services/call/call.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormatDatePipe } from '../../pipes/format-date/format-date.pipe';
import { FormatSecondsPipe } from '../../pipes/format-seconds/format-seconds.pipe';
import { CallTypeModalComponent } from '../../components/call-type-modal/call-type-modal.component';
import { SecondsToMMSSPipe } from '../../pipes/seconds-to-mmss/seconds-to-mmss.pipe';

@NgModule({
    declarations: [
        CallListComponent,
        CallSimulatorComponent,
        CallTypeModalComponent,
        FormatDatePipe,
        FormatSecondsPipe,
        SecondsToMMSSPipe,
    ],
    imports: [CommonModule, SharedModule, FormsModule],
    providers: [CallService, DatePipe],
    exports: [
        CallListComponent,
        CallSimulatorComponent,
        CallTypeModalComponent,
        FormatDatePipe,
        FormatSecondsPipe,
        SecondsToMMSSPipe,
    ],
})
export class CallModule {}
