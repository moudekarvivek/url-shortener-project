package com.url.shortener.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

//This DTO which is defining structure of a request for Login
@Data
public class ClickEventDTO {
    private LocalDate clickDate;
    private Long count;
}
