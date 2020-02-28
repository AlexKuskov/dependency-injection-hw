import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

}
