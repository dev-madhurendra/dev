package com.backend.pairprogramming.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserResponseDto {
    private Long userId;
    private String name;
    private String email;
}
