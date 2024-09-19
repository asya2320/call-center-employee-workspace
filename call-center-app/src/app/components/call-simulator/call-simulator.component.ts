import { Component } from '@angular/core';
import { CallService } from '../../services/call/call.service';

@Component({
    selector: 'app-call-simulator',
    templateUrl: './call-simulator.component.html',
    styleUrl: './call-simulator.component.scss',
})
export class CallSimulatorComponent {
    constructor(public callService: CallService) {}

    startCall() {
        this.callService.startCall();
    }

    async endCall() {
        await this.callService.endCall();
    }
}
