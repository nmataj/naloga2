import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-five-days',
  templateUrl: './weather-five-days.component.html',
  styleUrls: ['./weather-five-days.component.scss']
})
export class WeatherFiveDaysComponent implements OnInit {
  @Input()
  weatherForecast2: any[] = [];

  @Input()
  forecastDates: string[] = [];
  
  @Input()
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

}
