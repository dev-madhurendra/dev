package com.backend.pairprogramming.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {
    private Long id;
    private String name;
    private Double contributionPercentage;
    private Double moneyContribution;
}
