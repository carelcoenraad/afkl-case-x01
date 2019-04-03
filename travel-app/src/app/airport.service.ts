import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private airportsUrl = `${environment.baseUrl}/api/airports`;

  constructor(private http: HttpClient) {}

  searchAirports(term: string) {
    return this.http
      .get<any>(`${this.airportsUrl}?term=${term}`)
      .pipe(map(response => response._embedded.locationList));
  }
}
