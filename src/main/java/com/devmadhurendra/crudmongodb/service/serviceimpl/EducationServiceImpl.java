package com.devmadhurendra.crudmongodb.service.serviceimpl;

import com.devmadhurendra.crudmongodb.dto.EducationResponseDto;
import com.devmadhurendra.crudmongodb.entity.Education;
import com.devmadhurendra.crudmongodb.entity.User;
import com.devmadhurendra.crudmongodb.exception.ResourceNotFoundException;
import com.devmadhurendra.crudmongodb.repository.EducationRepository;
import com.devmadhurendra.crudmongodb.repository.UserRepository;
import com.devmadhurendra.crudmongodb.service.EducationService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class EducationServiceImpl implements EducationService {

    private final EducationRepository educationRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public EducationServiceImpl(EducationRepository educationRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.educationRepository = educationRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public EducationResponseDto createEducation(Long userId, Education educationRequestDto) {
        log.info(">>> called create education");
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));
        educationRequestDto.setUser(user);
        Education education = educationRepository.save(educationRequestDto);
        return modelMapper.map(education,EducationResponseDto.class);
    }

    @Override
    public EducationResponseDto getEducationById(Long educationId) {
        Education education = educationRepository.findById(educationId).orElseThrow(() -> new ResourceNotFoundException("Education ", educationId.toString()));
        return modelMapper.map(education,EducationResponseDto.class);
    }

    @Override
    public void deleteEducation(Long educationId) {
        Education education = educationRepository.findById(educationId).orElseThrow(() -> new ResourceNotFoundException("Education ", educationId.toString()));
        educationRepository.delete(education);
    }

    @Override
    public EducationResponseDto updateEducation(Long educationId, Education educationRequestDto) {
        Education education = educationRepository.findById(educationId).orElseThrow(() -> new ResourceNotFoundException("Education ", educationId.toString()));
        education.setSchool(educationRequestDto.getSchool());
        education.setDegree(educationRequestDto.getDegree());
        education.setPercentage(educationRequestDto.getPercentage());
        education.setPassingYear(educationRequestDto.getPassingYear());

        Education updatedEducation = educationRepository.save(education);
        return modelMapper.map(updatedEducation,EducationResponseDto.class);
    }

    @Override
    public List<EducationResponseDto> getAllEducationByUserId(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));
        List<Education> educations = educationRepository.findByUserId(userId);

        return educations.stream()
                .map(education -> modelMapper.map(education, EducationResponseDto.class))
                .collect(Collectors.toList());
    }


}
