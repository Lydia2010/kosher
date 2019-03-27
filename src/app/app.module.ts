import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material Imports
import {MatCardModule} from '@angular/material/card';
import { RestCardComponent } from './view/rest-card/rest-card.component';
import { RestaurantsComponent } from './view/restaurants/restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    RestCardComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
