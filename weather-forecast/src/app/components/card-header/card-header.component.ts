import { Component, Input, OnInit } from '@angular/core';
import CityModel from 'src/app/models/city';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input() weatherForecast2: any[] = [];

  @Input() data(): Promise<void> {
    return Promise.resolve(undefined);
  }
  @Input() coordinates(): Promise<unknown> {
    return Promise.resolve(undefined);
  }
  @Input() forecast(): Promise<unknown> {
    return Promise.resolve(undefined);
  }
  @Input() show(): Promise<unknown> {
    return Promise.resolve(undefined);
  }

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

  @Input()
  city = <CityModel>{
    name: '',
    lat: 0,
    lon: 0
  };

  @Input()
  loading = true;

  @Input()
  localDateTime: string[] = [];

  @Input()
  dateTime(miliseconds: number) {
    return [''];
  }

  constructor(private weatherForecastService: WeatherForecastService) { }



  ngOnInit(): void {
  }

}
