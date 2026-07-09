package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        switch (code.toUpperCase()) {

            case "IN":
                return new Country("IN", "India");

            case "US":
                return new Country("US", "United States");

            case "JP":
                return new Country("JP", "Japan");

            default:
                return new Country(code.toUpperCase(), "Country Not Found");
        }
    }
}