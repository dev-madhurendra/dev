package com.backend.pairprogramming.service.serviceimpl;

import com.backend.pairprogramming.dto.UserRequestDto;
import com.backend.pairprogramming.dto.UserResponseDto;
import com.backend.pairprogramming.entity.User;
import com.backend.pairprogramming.exception.ResourceNotFoundException;
import com.backend.pairprogramming.repository.UserRepository;
import com.backend.pairprogramming.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserResponseDto createUser(UserRequestDto userRequestDto) {
        Optional <User> isUserExist = userRepository.findByEmail(userRequestDto.getEmail());
        if (isUserExist.isPresent()) {
            throw new IllegalArgumentException("User already exist with this email");
        }
        String encryptedPassword = passwordEncoder.encode(userRequestDto.getPassword());
        User newUser = User.builder()
                .email(userRequestDto.getEmail())
                .name(userRequestDto.getName())
                .password(encryptedPassword)
                .build();
        newUser.setPassword(encryptedPassword);
        User savedUser = userRepository.save(newUser);
        log.info(">>> User created successfully !");
        return UserResponseDto.builder()
                .userId(savedUser.getUserId())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .build();
    }

    @Override
    public List<UserResponseDto> getAllUser() {
        List<User> allUsers = userRepository.findAll();
        log.info(">>> All Users : ");
        return allUsers.stream()
                .map(savedUser ->
                        UserResponseDto.builder()
                                .userId(savedUser.getUserId())
                                .name(savedUser.getName())
                                .email(savedUser.getEmail())
                                .build()
                ).collect(Collectors.toList());
    }

    @Override
    public UserResponseDto getUserById(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", userId.toString()));
        log.info(">>> User !");
        return UserResponseDto.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }

    @Override
    public UserResponseDto updateUser(UserRequestDto userRequestDto, Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", userId.toString()));
        user.setEmail(userRequestDto.getEmail());
        user.setName(userRequestDto.getName());
        user.setPassword(passwordEncoder.encode(userRequestDto.getPassword()));
        User updatedUser = userRepository.save(user);
        log.info(">>> User updated successfully !");
        return UserResponseDto.builder()
                .userId(updatedUser.getUserId())
                .name(updatedUser.getName())
                .email(updatedUser.getEmail())
                .build();
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", userId.toString()));
        log.info(">>> User deleted successfully !");
        userRepository.delete(user);
    }
}
