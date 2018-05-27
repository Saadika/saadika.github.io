import { Component } from '@angular/core';
import { DataService } from './data.service';
import { error } from 'util';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  lat:any;
  lng:any;
  weatherResponse:any;
  loading:boolean = true;
  sunny:boolean = false;
  cloudy:boolean = false;
  today:any;

  constructor (private DataService: DataService) {
    navigator.geolocation.getCurrentPosition((position) => {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      //this.manageData(latitude, longitude);

      console.log(latitude, longitude);

      this.DataService.getWeather(latitude, longitude)
    .subscribe(
      (Response) => {
        const data = Response.json();
        console.log(data);
        this.weatherResponse = data;
        this.loading = false;
        if(this.weatherResponse.weather[0].description == 'sunny') {
          this.sunny = true;
        } else if (this.weatherResponse.weather[0].description == 'cloudy') {
          this.cloudy = true;
        } else {
          this.sunny = false;
          this.cloudy = false;
        }
      },
      (error) => console.log(error)
    );

    });

  }

  ngOnInit() {
    this.currentWeather(this.lat, this.lng);
    this.today = Date.now();
  }

  refresh():void {
    window.location.reload();
  }

  currentWeather(lat, lng): void {
    
  }

  
}
