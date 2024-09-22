import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatSeconds',
})
export class FormatSecondsPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        const hours = Math.floor(Number(value) / 3600);
        const minutes = Math.floor((Number(value) % 3600) / 60);
        const seconds = Number(value) % 60;

        const formattedTime = `${hours ? `${hours}ч ` : ''}${minutes ? `${minutes}мин ` : ''}${seconds}с`;
        return formattedTime;
    }
}
