import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/city';

@Pipe({
  name: 'cityRender'
})
export class CityPipe implements PipeTransform {

  transform(city: City, ...args: any[]): any {
    const { name, population, square, budget } = city;

    return `This is ${name}, its population is ${population}, square: ${square}, and budget: ${budget}`;
  }

}
