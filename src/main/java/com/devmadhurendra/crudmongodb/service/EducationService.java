package com.devmadhurendra.crudmongodb.service;

import com.devmadhurendra.crudmongodb.dto.EducationResponseDto;
import com.devmadhurendra.crudmongodb.entity.Education;

import java.util.List;

public interface EducationService {

    EducationResponseDto createEducation(Long userId, Education educationRequestDto);
    EducationResponseDto getEducationById(Long educationId);
    void deleteEducation(Long educationId);
    EducationResponseDto updateEducation(Long educationId, Education educationRequestDto);
    List<EducationResponseDto> getAllEducationByUserId(Long userId);
}
