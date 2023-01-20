import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
})
export class CompletedPipe implements PipeTransform {
  transform(value: boolean) {
    return !value ? 'Pending' : 'Done';
  }
}
