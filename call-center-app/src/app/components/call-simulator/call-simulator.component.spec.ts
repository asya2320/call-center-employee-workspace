import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSimulatorComponent } from './call-simulator.component';

describe('CallSimulatorComponent', () => {
  let component: CallSimulatorComponent;
  let fixture: ComponentFixture<CallSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
