package com.devmadhurendra.crudmongodb.dto;

import com.devmadhurendra.crudmongodb.repository.EducationRepository;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {
    private String id;
    private String name;
    private String email;
    private String address;
    private List<EducationResponseDto> education = new ArrayList<>();
}
