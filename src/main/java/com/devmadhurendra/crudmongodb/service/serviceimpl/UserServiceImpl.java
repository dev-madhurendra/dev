package com.devmadhurendra.crudmongodb.service.serviceimpl;

import com.devmadhurendra.crudmongodb.dto.EducationResponseDto;
import com.devmadhurendra.crudmongodb.dto.UserPageResponseDto;
import com.devmadhurendra.crudmongodb.dto.UserRequestDto;
import com.devmadhurendra.crudmongodb.dto.UserResponseDto;
import com.devmadhurendra.crudmongodb.entity.Education;
import com.devmadhurendra.crudmongodb.entity.User;
import com.devmadhurendra.crudmongodb.exception.ResourceNotFoundException;
import com.devmadhurendra.crudmongodb.repository.EducationRepository;
import com.devmadhurendra.crudmongodb.repository.UserRepository;
import com.devmadhurendra.crudmongodb.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final EducationRepository educationRepository;

    @Autowired
    public UserServiceImpl(
            UserRepository userRepository,
            ModelMapper modelMapper,
            EducationRepository educationRepository) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.educationRepository = educationRepository;
    }

    @Override
    public UserResponseDto createUser(UserRequestDto userRequestDto) {
        User existingUser = userRepository.findByEmail(userRequestDto.getEmail()).orElse(null);
        if (existingUser != null) {
            log.warn(">>> Email already exists");
            throw new IllegalArgumentException("Email already exists");
        }
        User newUser = modelMapper.map(userRequestDto, User.class);

        User savedUser = userRepository.save(newUser);
        log.info(">>> User created successfully !");
        return modelMapper.map(savedUser, UserResponseDto.class);
    }

    @Override
    public UserPageResponseDto getAllUsers(int pageNumber, int pageSize, String sortBy, boolean sortDirIsAsc) {
        Sort sort = sortDirIsAsc ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNumber,pageSize, sort);
        Page<User> userPage = userRepository.findAll(pageable);
        UserPageResponseDto userPageResponseDto = new UserPageResponseDto();
        List<UserResponseDto> userResponseDtos = userPage.stream()
                .map(user -> {
                    UserResponseDto userResponseDto =
                            modelMapper.map(user, UserResponseDto.class);
                    List<Education> educationResponseDto =
                            educationRepository.findByUserId(user.getId());
                    userResponseDto.setEducation(
                            educationResponseDto.stream().map(
                                    education -> modelMapper.map(education, EducationResponseDto.class)
                            ).collect(Collectors.toList())
                    );
                    return userResponseDto;
                }).collect(Collectors.toList());
        userPageResponseDto.setContent(userResponseDtos);
        userPageResponseDto.setPageNumber(userPage.getNumber());
        userPageResponseDto.setPageSize(userPage.getSize());
        userPageResponseDto.setTotalElements(userPage.getTotalElements());

        userPageResponseDto.setTotalPages(userPage.getTotalPages());
        userPageResponseDto.setLastPage(userPage.isLast());
        log.info(">>> Get all User !");
        return userPageResponseDto;
    }

    @Override
    public UserResponseDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));
        log.info(">>> Get User By Id !");
        return modelMapper.map(user, UserResponseDto.class);
    }

    @Override
    public UserResponseDto updateUser(Long userId, UserRequestDto userRequestDto) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));

        existingUser.setName(userRequestDto.getName());
        existingUser.setEmail(userRequestDto.getEmail());
        existingUser.setAddress(userRequestDto.getAddress());

        User updatedUser = userRepository.save(existingUser);
        log.info(">>> User updated!");
        return modelMapper.map(updatedUser, UserResponseDto.class);
    }

    @Override
    public void deleteUser(Long userId) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));
        log.info(">>> User deleted!");
        userRepository.delete(existingUser);
    }

    @Override
    public List<UserResponseDto> getAllSearchedUser(String name) {
        List<User> users = userRepository.findByName(name);
        return users
                .stream()
                .map(user -> modelMapper.map(user, UserResponseDto.class))
                .collect(Collectors.toList());
    }
}
