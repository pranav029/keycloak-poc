package com.poc.keycloak;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DataController {

    @GetMapping("/names")
    public String getAllNames() {
        return List.of("A", "B", "C").toString();
    }

    @GetMapping("/admin/names")
    @PreAuthorize("hasRole('ADMIN')")
    public String getAllAdminNames() {
        return List.of("X", "Y", "Z").toString();
    }
}
