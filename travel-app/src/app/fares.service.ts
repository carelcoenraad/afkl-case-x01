import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FaresService {
  private faresUrl = `${environment.baseUrl}/api/fares`;

  constructor(private http: HttpClient) {}

  getFare(originCode: string, destinationCode: string): Observable<any> {
    return this.http.get<any>(`${this.faresUrl}/${originCode}/${destinationCode}`);
  }
}
