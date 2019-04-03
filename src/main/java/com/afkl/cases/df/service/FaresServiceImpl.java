package com.afkl.cases.df.service;

import com.afkl.exercises.spring.fares.Fare;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Service;

@Service
public class FaresServiceImpl implements FaresService {

    private final OAuth2RestTemplate oAuth2RestTemplate;

    @Value("${travelapi.host}")
    private String host;

    @Autowired
    public FaresServiceImpl(OAuth2RestTemplate oAuth2RestTemplate) {
        this.oAuth2RestTemplate = oAuth2RestTemplate;
    }

    @Override
    public ResponseEntity<Fare> getFare(String originCode, String destinationCode) {
        return oAuth2RestTemplate.exchange(
            host + "/fares/{originCode}/{destinationCode}",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Fare>() {},
            originCode,
            destinationCode
        );
    }
}
