import { Component, Input, OnInit } from '@angular/core';
import CityModel from 'src/app/models/city';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';
import { lastValueFrom, from, pipe, take, firstValueFrom, forkJoin, map } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  @Input()
  weatherForecast = {
    dt: 0,
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0
    },
    rain: {
      '1h': 0
    },
    clouds: {
      all: 0
    },
    wind: {
      speed: 0
    }
  };

  weatherForecast2: any[] = [];

  city = <CityModel>{
    name: '',
    lat: 0,
    lon: 0
  };

  loading = true;

  localDateTime: string[] = [];

  constructor(private weatherForecastService: WeatherForecastService) {
  }

  show() {
    return new Promise((resolve, reject) => {
      this.weatherForecastService.show(this.city.lat.toString(), this.city.lon.toString()).subscribe({
        error: (error) => {
          this.loading = true;
          reject(error);
        },
        next: (response) => {
          this.weatherForecast = response;
          this.loading = false;
          resolve(response);
        }
      });
    })
  }

  coordinates() {
    return new Promise((resolve, reject) => {
      this.weatherForecastService.coordinates('Maribor').subscribe({
        error: (error) => { reject(error) },
        next: (response) => {
          this.city.name = response[0].name;
          this.city.lat = response[0].lat;
          this.city.lon = response[0].lon;
          resolve(response);
        }
      });
    })
  }
  forecastDates: string[] = [];

  forecast() {
    return new Promise((resolve, reject) => {
      this.weatherForecastService.forecast(this.city.lat.toString(), this.city.lon.toString()).subscribe({
        error: (error) => {
          this.loading = true;
          reject(error);
        },
        next: (response) => {
          this.weatherForecast2 = [];
          for (let i = 0; i < response.list.length; i += 8) {
            this.weatherForecast2.push(response.list[i]);
          }
          this.forecastDates = [];
          for (let item of this.weatherForecast2) {
            this.forecastDates.push(this.dateTime(item.dt)[0]);
          }

          this.loading = false;
          resolve(response);
        }
      });
    })
  }

  dateTime(miliseconds: number) {
    let date = new Date(miliseconds * 1000).toUTCString();
    return this.localDateTime = moment(date).local().format('DD.MM.YYYY HH:mm').split(' ');
  }

  async data() {
    await this.coordinates();
    await this.forecast();
    await this.show();
  }

  ngOnInit() {
    this.data();
  }
}
