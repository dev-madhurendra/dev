package com.backend.pairprogramming.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequestDto {
    @NotNull(message = "Name cannot be null")
    @Size(min = 3, message = "Name should be at least 3 character long.")
    private String name;
}
