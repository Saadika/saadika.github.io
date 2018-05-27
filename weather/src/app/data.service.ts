import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) {
   }

  public getWeather(lat, lng): Observable<any> {
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?appid=53f9d8e4213222cf517d86dc406d67fc&lat=' + lat +'&lon=' + lng)

  }

}
