import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPhysicsValues'
})
export class ConvertPhysicsValuesPipe implements PipeTransform {

  transform(value: number, ml: string): string {
    if (ml === 'g') {
      return this.doG(value);
    } else {
      return this.doL(value);
    }
  }

  doL(value: number) {
    if (value < 1000) {
      return value + ' мл';
    } else {
      return value / 1000 + ' л';
    }
  }

  doG(value: number) {
    if (value < 1000) {
      return value + ' г';
    } else {
      return value / 1000 + ' кг';
    }
  }

}
