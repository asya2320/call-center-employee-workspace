import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondsToMMSS',
})
export class SecondsToMMSSPipe implements PipeTransform {
    transform(value: number | null): string {
        if (value == null || isNaN(value)) {
            return '00:00';
        }

        const minutes = Math.floor(value / 60);
        const seconds = value % 60;

        return `${this.pad(minutes)}:${this.pad(seconds)}`;
    }

    private pad(num: number): string {
        return num.toString().padStart(2, '0');
    }
}
