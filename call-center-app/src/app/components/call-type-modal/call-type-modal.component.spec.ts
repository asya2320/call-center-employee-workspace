import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTypeModalComponent } from './call-type-modal.component';

describe('CallTypeModalComponent', () => {
    let component: CallTypeModalComponent;
    let fixture: ComponentFixture<CallTypeModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CallTypeModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CallTypeModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
