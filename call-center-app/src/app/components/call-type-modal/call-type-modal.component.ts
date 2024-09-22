import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-call-type-modal',
    templateUrl: './call-type-modal.component.html',
    styleUrl: './call-type-modal.component.scss',
})
export class CallTypeModalComponent {
    @Input() isOpen = false;
    @Output() typeSelected = new EventEmitter<string>();
    @Output() closeModal = new EventEmitter<void>();

    callTypes: { code: string; description: string }[] = [
        { code: 'A', description: 'Вызов Машинист' },
        { code: 'B', description: 'Вызов Скорой Помощи' },
        { code: 'C', description: 'Вызов МЧС' },
        { code: 'D', description: 'Вызов Полиции' },
    ];

    selectType(type: { code: string; description: string }) {
        this.typeSelected.emit(type.code);
        this.closeModal.emit();
    }

    close() {
        this.closeModal.emit();
    }
}
