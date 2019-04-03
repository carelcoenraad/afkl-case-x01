package com.afkl.cases.df.controller;

import com.afkl.cases.df.service.AirportService;
import com.afkl.exercises.spring.locations.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airports")
// TODO: Apply this only for local dev configuration
@CrossOrigin(origins = "http://localhost:4200")
public class AirportController {

    private final AirportService airportService;

    @Autowired
    public AirportController(AirportService airportService) {
        this.airportService = airportService;
    }

    @GetMapping()
    public ResponseEntity<PagedResources<Resource<Location>>> list(@RequestParam(value = "term", required = false) String term) {
        return airportService.list(term);
    }

    @GetMapping(path = "/{code}")
    public ResponseEntity<Resource<Location>> getAirport(
        @PathVariable("code") String code
    ) {
        // TODO: Check if service returns an airport, otherwise return 404
        return airportService.getAirport(code);
    }
}
