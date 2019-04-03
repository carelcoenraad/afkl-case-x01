import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFareComponent } from './search-fare/search-fare.component';
import { MetricsComponent } from './metrics/metrics.component';

@NgModule({
  declarations: [AppComponent, SearchFareComponent, MetricsComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
