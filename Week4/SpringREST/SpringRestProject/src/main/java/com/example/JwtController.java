package com.example;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.util.Date;

@RestController
public class JwtController {

    private static final SecretKey SECRET_KEY =
            Keys.hmacShaKeyFor("MySecretKeyMySecretKeyMySecretKey12345".getBytes());

    @GetMapping("/token")
    public String generateToken() {

        return Jwts.builder()
                .setSubject("Hari")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }
}