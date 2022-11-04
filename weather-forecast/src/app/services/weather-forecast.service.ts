import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient: HttpClient) { }

  coordinates(city: string): Observable<any> {
    return this.httpClient.get<any>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${environment.apiKey}`);
  }

  show(lat: string, lon: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`);
  }

  forecast(lat: string, lon: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=40&appid=${environment.apiKey}`);
  }
}
