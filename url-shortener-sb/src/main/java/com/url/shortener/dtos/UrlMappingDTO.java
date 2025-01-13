package com.url.shortener.dtos;

import lombok.Data;

import java.time.LocalDateTime;

//This DTO which is defining structure of a request for Login
@Data
public class UrlMappingDTO {
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount;
    private LocalDateTime createdDate;
    private String username;
}
