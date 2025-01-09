package com.url.shortener.dtos;

import lombok.Data;

import java.util.Set;

//This DTO which is defining structure of a request for registration
@Data
public class RegisterRequest {
    private String username;
    private String email;
    private Set<String> role;
    private String password;

}
