package com.devmadhurendra.crudmongodb.controller;

import com.devmadhurendra.crudmongodb.dto.UserPageResponseDto;
import com.devmadhurendra.crudmongodb.dto.UserRequestDto;
import com.devmadhurendra.crudmongodb.dto.UserResponseDto;
import com.devmadhurendra.crudmongodb.entity.User;
import com.devmadhurendra.crudmongodb.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserResponseDto> createUser(@RequestBody UserRequestDto userRequestDto) {
        UserResponseDto createdUser = userService.createUser(userRequestDto);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<UserPageResponseDto> getAllUsers(
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) int pageNumber,
            @RequestParam(value = "pageSize", defaultValue="2", required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue="id", required = false) String sortBy,
            @RequestParam(value = "sortDirIsAsc", defaultValue = "true", required = false) boolean sortDirIsAsc
    ) {
        UserPageResponseDto users = userService.getAllUsers(pageNumber,pageSize, sortBy, sortDirIsAsc);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<UserResponseDto>> getAllUsers(
            @PathVariable String name
    ) {
        List<UserResponseDto> users = userService.getAllSearchedUser(name);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable Long userId) {
        UserResponseDto user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long userId,
            @RequestBody UserRequestDto userRequestDto
    ) {
        UserResponseDto updatedUser = userService.updateUser(userId, userRequestDto);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
