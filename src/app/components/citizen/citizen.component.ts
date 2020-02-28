import { Component, OnInit } from '@angular/core';
import { CitizenService } from 'src/app/services/citizen.service';
import { Citizen } from 'src/app/models/citizen';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  citizens: Citizen[];

  constructor(private citizenService: CitizenService) { }

  ngOnInit() {
    this.citizens = this.citizenService.getCitizens();
  }

}
