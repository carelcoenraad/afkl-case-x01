package com.afkl.cases.df.service;

import com.afkl.exercises.spring.locations.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Service;

@Service
public class AirportServiceImpl implements AirportService {

    private final OAuth2RestTemplate oAuth2RestTemplate;

    @Value("${travelapi.host}")
    private String host;

    @Autowired
    public AirportServiceImpl(OAuth2RestTemplate oAuth2RestTemplate) {
        this.oAuth2RestTemplate = oAuth2RestTemplate;
    }

    @Override
    public ResponseEntity<PagedResources<Resource<Location>>> list(String term) {
        return oAuth2RestTemplate.exchange(
            host + "airports?term={term}",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<PagedResources<Resource<Location>>>() {},
            term
        );
    }

    @Override
    public ResponseEntity<Resource<Location>> getAirport(String code) {
        return oAuth2RestTemplate.exchange(
            host + "airports/{code}",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Resource<Location>>() {},
            code
        );
    }
}
