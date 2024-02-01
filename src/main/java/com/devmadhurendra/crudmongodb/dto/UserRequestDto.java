package com.devmadhurendra.crudmongodb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequestDto {
    private String name;
    private String email;
    private String address;
    private String designation;
}
