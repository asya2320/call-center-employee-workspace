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
    isModalOpen: boolean = false;
    selectedCall: ICallInfo;

    sortColumn: keyof ICallInfo = 'startTime';
    sortOrder: 'asc' | 'desc' = 'asc';

    validCallTypes = ['A', 'B', 'C', 'D'];

    constructor(private callService: CallService) {}

    ngOnInit() {
        this.calls$ = this.callService.callList$;
    }

    remove(call: ICallInfo) {
        this.callService.deleteCall(call);
    }

    updateCallType(call: ICallInfo) {
        const callType = call.type?.toUpperCase();
        if (callType && this.validCallTypes.includes(callType)) {
            call.type = callType;
            this.callService.updateCallType(call);
        } else {
            alert('Неверный тип звонка. Допустимые значения: A, B, C, D.');
            call.type = '';
        }
    }

    openModal(call: ICallInfo) {
        this.selectedCall = call;
        this.isModalOpen = true;
    }

    onTypeSelected(type: string) {
        this.selectedCall.type = type;
        this.updateCallType(this.selectedCall);
        this.isModalOpen = false;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    setSort(column: keyof ICallInfo) {
        if (this.sortColumn === column) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortOrder = 'asc';
        }
    }
}
