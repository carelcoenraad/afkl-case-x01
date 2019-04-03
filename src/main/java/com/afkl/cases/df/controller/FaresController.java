package com.afkl.cases.df.controller;

import com.afkl.cases.df.service.FaresService;
import com.afkl.exercises.spring.fares.Fare;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fares")
public class FaresController {

    private final FaresService faresService;

    @Autowired
    public FaresController(FaresService faresService) {
        this.faresService = faresService;
    }

    @GetMapping(path = "/{originCode}/{destinationCode}")
    public ResponseEntity<Fare> getAirport(
        @PathVariable("originCode") String originCode,
        @PathVariable("destinationCode") String destinationCode
    ) {
        return faresService.getFare(originCode, destinationCode);
    }
}
