package com.backend.pairprogramming.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserPay {
    @NotBlank
    private Long totalBill;
}
