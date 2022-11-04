import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
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
  loading = true;
  constructor() { }

  ngOnInit(): void {
  }

}
