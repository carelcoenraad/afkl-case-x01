package com.afkl.cases.df.service;

import com.afkl.exercises.spring.locations.Location;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;

public interface AirportService {

    ResponseEntity<PagedResources<Resource<Location>>> list(String term);

    ResponseEntity<Resource<Location>> getAirport(String code);

}
