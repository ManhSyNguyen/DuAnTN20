package com.example.demosecurity.Controller;

import com.example.demosecurity.Service.auth.CustomUserDetailsService;
import com.example.demosecurity.model.jwt.AuthRequest;
import com.example.demosecurity.model.jwt.AuthenticationResponse;
import com.example.demosecurity.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/auth")
public class ApplicationController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService detailservice;
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthRequest authReq) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getUserName(),authReq.getPassword())
            );
        } catch (AuthenticationException e) {
//            throw new Exception("Incorrect username or password");
            return ResponseEntity.status(401).body("Incorrect username or password");
        }

        final UserDetails userDetails = detailservice
                .loadUserByUsername(authReq.getUserName());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
