package com.devmadhurendra.crudmongodb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EducationResponseDto {
    private String school;
    private String degree;
    private LocalDate passingYear;
    private double percentage;
}
