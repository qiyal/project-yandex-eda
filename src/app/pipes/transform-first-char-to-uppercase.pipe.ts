import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformFirstCharToUppercase'
})
export class TransformFirstCharToUppercasePipe implements PipeTransform {

  transform(tag: string): string {
    return tag.charAt(0).toUpperCase() + tag.substring(1);
  }
}
