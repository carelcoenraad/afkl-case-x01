import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  private metricsUrl = `${environment.baseUrl}/actuator`;

  constructor(private http: HttpClient) {}

  getHttpTrace(): Observable<any> {
    return this.http.get<any>(`${this.metricsUrl}/httptrace`);
  }
}
