import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLineCharacters',
  standalone: true
})
export class NewLineCharactersPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
