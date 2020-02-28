import { Pipe, PipeTransform } from '@angular/core';
import { Citizen } from '../models/citizen';

@Pipe({
  name: 'citizenRender'
})
export class CitizenPipe implements PipeTransform {

  transform(citizen: Citizen, ...args: any[]): any {
    const { name, surname, age, weight } = citizen;

    return `I'm ${name} ${surname}, I'm ${age} years old, and my weight is ${weight}`;
  }

}
