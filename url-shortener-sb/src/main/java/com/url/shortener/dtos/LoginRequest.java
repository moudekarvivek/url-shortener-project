package com.url.shortener.dtos;

import lombok.Data;

import java.util.Set;

//This DTO which is defining structure of a request for Login
@Data
public class LoginRequest {
    private String username;
    private String password;
}
