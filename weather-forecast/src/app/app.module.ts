import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherFiveDaysComponent } from './components/weather-five-days/weather-five-days.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HeaderComponent,
    CardHeaderComponent,
    CurrentWeatherComponent,
    WeatherFiveDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [ HeaderComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
