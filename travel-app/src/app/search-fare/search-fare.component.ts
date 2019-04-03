import { Component } from '@angular/core';
import { AirportService } from '../airport.service';
import { FaresService } from '../fares.service';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-fare',
  templateUrl: './search-fare.component.html',
  styleUrls: ['./search-fare.component.sass'],
})
export class SearchFareComponent {
  destination: any;
  fare: any;
  origin: any;
  searching = false;

  constructor(private airportService: AirportService, private faresService: FaresService) {}

  onSubmit() {
    this.searching = true;
    this.faresService.getFare(this.origin.code, this.destination.code).subscribe(fare => {
      this.searching = false;
      this.fare = fare;
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.airportService.searchAirports(term).pipe(
          catchError(() => {
            return of([]);
          }),
        ),
      ),
    );

  formatter = location => location.name;
}
