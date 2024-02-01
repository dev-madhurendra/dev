package com.devmadhurendra.crudmongodb.controller;

import com.devmadhurendra.crudmongodb.dto.EducationResponseDto;
import com.devmadhurendra.crudmongodb.entity.Education;
import com.devmadhurendra.crudmongodb.service.EducationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/educations")
@Slf4j
public class EducationController {

    private final EducationService educationService;

    @Autowired
    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<EducationResponseDto> createEducation(
            @PathVariable Long userId,
            @RequestBody Education educationRequestDto
    ) {
        log.info(">>> Controller called");
        EducationResponseDto createdEducation = educationService.createEducation(userId, educationRequestDto);
        return new ResponseEntity<>(createdEducation, HttpStatus.CREATED);
    }

    @GetMapping("/{educationId}")
    public ResponseEntity<EducationResponseDto> getEducationById(@PathVariable Long educationId) {
        EducationResponseDto education = educationService.getEducationById(educationId);
        return new ResponseEntity<>(education, HttpStatus.OK);
    }

    @DeleteMapping("/{educationId}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long educationId) {
        educationService.deleteEducation(educationId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{educationId}")
    public ResponseEntity<EducationResponseDto> updateEducation(
            @PathVariable Long educationId,
            @RequestBody Education educationRequestDto
    ) {
        EducationResponseDto updatedEducation = educationService.updateEducation(educationId, educationRequestDto);
        return new ResponseEntity<>(updatedEducation, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EducationResponseDto>> getAllEducationByUserId(@PathVariable Long userId) {
        List<EducationResponseDto> educations = educationService.getAllEducationByUserId(userId);
        return new ResponseEntity<>(educations, HttpStatus.OK);
    }
}
