import { Component } from '@angular/core';
import { ICallInfo } from '../../models/call.model';
import { Observable } from 'rxjs';
import { CallService } from '../../services/call/call.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-call-list',
    templateUrl: './call-list.component.html',
    styleUrl: './call-list.component.scss',
})
export class CallListComponent {
    calls$: Observable<ICallInfo[]>;

    constructor(
        private callService: CallService,
        private datePipe: DatePipe,
    ) {}

    ngOnInit() {
        this.calls$ = this.callService.callList$;
    }

    remove(call: ICallInfo) {
        this.callService.deleteCall(call);
    }
}
