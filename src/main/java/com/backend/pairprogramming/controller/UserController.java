package com.backend.pairprogramming.controller;

import com.backend.pairprogramming.dto.UserRequestDto;
import com.backend.pairprogramming.dto.UserResponseDto;
import com.backend.pairprogramming.payload.ApiResponse;
import com.backend.pairprogramming.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public ResponseEntity<UserResponseDto> createUser(
            @Valid
            @RequestBody
            UserRequestDto userRequestDto
    ) {

        UserResponseDto userResponseDto = userService.createUser(userRequestDto);
        return new ResponseEntity<>(userResponseDto, HttpStatus.CREATED);

    }

    @GetMapping("/users")
    public ResponseEntity<List<UserResponseDto>> getAllUser() {
        List<UserResponseDto> userResponseDto = userService.getAllUser();
        return new ResponseEntity<>(userResponseDto, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserResponseDto> getUserById(
            @PathVariable
            Long userId
    ) {
        UserResponseDto userResponseDto = userService.getUserById(userId);
        return new ResponseEntity<>(userResponseDto,HttpStatus.OK);
    }

    @PutMapping("user/{userId}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long userId,
            @Valid @RequestBody UserRequestDto userRequestDto
    ) {
        UserResponseDto userResponseDto = userService.updateUser(userRequestDto,userId);
        return new ResponseEntity<>(userResponseDto,HttpStatus.CREATED);
    }

    @DeleteMapping("user/{userId}")
    public ResponseEntity<String> deleteUser(
            @PathVariable Long userId
    ) {
        userService.deleteUser(userId);
        return new ResponseEntity<>("User deleted successfully",HttpStatus.OK);
    }
}
