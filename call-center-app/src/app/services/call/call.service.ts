import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICallInfo } from '../../models/call.model';
import { AudioService } from '../audio/audio.service';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private callListSubject = new BehaviorSubject<ICallInfo[]>([]);
    callList$ = this.callListSubject.asObservable();

    constructor() {
        this.loadCallsFromLocalStorage();
    }

    addCall(call: ICallInfo) {
        const calls = this.callListSubject.value;
        calls.push(call);
        this.callListSubject.next(calls);
        this.saveCallsToLocalStorage();
    }

    deleteCall(currCall: ICallInfo) {
        const calls = this.callListSubject.value.filter(
            (call: ICallInfo) => currCall !== call,
        );
        this.callListSubject.next(calls);
        this.saveCallsToLocalStorage();
    }

    updateCallType(currCall: ICallInfo) {
        const calls = this.callListSubject.value.map((call: ICallInfo) =>
            call === currCall ? { ...call, type: currCall.type } : call,
        );
        this.callListSubject.next(calls);
        this.saveCallsToLocalStorage();
    }

    getCalls() {
        return this.callListSubject.value;
    }

    private saveCallsToLocalStorage() {
        localStorage.setItem(
            'callList',
            JSON.stringify(this.callListSubject.value),
        );
    }

    private loadCallsFromLocalStorage() {
        const calls =
            JSON.parse(String(localStorage.getItem('callList'))) || [];
        this.callListSubject.next(calls);
    }
}
