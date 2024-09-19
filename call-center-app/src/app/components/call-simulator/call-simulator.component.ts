import { Component } from '@angular/core';

@Component({
    selector: 'app-call-simulator',
    templateUrl: './call-simulator.component.html',
    styleUrl: './call-simulator.component.scss',
})
export class CallSimulatorComponent {
    public timer: number = 0;
}
