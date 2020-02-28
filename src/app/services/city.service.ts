import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { CITIES } from '../mocks/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCities(): City[] {
    return CITIES;
  }
}
