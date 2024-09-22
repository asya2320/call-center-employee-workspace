import { Component } from '@angular/core';
import { AudioService } from '../../services/audio/audio.service';

@Component({
    selector: 'app-call-simulator',
    templateUrl: './call-simulator.component.html',
    styleUrl: './call-simulator.component.scss',
})
export class CallSimulatorComponent {
    constructor(public audioService: AudioService) {}

    startCall() {
        this.audioService.startCall();
    }

    async endCall() {
        await this.audioService.endCall();
    }
}
