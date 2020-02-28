import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { CitizenComponent } from './components/citizen/citizen.component';
import { CitizenPipe } from './pipes/citizen.pipe';
import { CityPipe } from './pipes/city.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitizenComponent,
    CitizenPipe,
    CityPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
