package com.afkl.cases.df.service;

import com.afkl.exercises.spring.fares.Fare;
import org.springframework.http.ResponseEntity;

public interface FaresService {

    ResponseEntity<Fare> getFare(String originCode, String destinationCode);

}
