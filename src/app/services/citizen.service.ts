import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen';
import { CITIZENS } from '../mocks/mock-citizens';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  getCitizens(): Citizen[] {
    return CITIZENS;
  }
}
