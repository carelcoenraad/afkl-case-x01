import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFareComponent } from './search-fare.component';

describe('SearchFareComponent', () => {
  let component: SearchFareComponent;
  let fixture: ComponentFixture<SearchFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFareComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
