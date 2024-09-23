import { Pipe, PipeTransform } from '@angular/core';
import { ICallInfo } from '../../models/call.model';

@Pipe({
    name: 'sortTable',
})
export class SortTablePipe implements PipeTransform {
    transform(
        array: ICallInfo[],
        field: keyof ICallInfo,
        order: 'asc' | 'desc' = 'asc',
    ): ICallInfo[] {
        if (!Array.isArray(array)) {
            return [];
        }
        const direction = order === 'asc' ? 1 : -1;
        return array.sort((a, b) => {
            const aValue = field === 'duration' ? Number(a[field]) : a[field];
            const bValue = field === 'duration' ? Number(b[field]) : b[field];

            if (aValue === undefined && bValue === undefined) {
                return 0;
            }
            if (aValue === undefined) {
                return 1 * direction;
            }
            if (bValue === undefined) {
                return -1 * direction;
            }
            if (aValue < bValue) {
                return -1 * direction;
            } else if (aValue > bValue) {
                return 1 * direction;
            } else {
                return 0;
            }
        });
    }
}
