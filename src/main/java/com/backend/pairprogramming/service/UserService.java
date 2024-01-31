package com.backend.pairprogramming.service;

import com.backend.pairprogramming.dto.UserRequestDto;
import com.backend.pairprogramming.dto.UserResponseDto;
import java.util.List;

public interface UserService {
    UserResponseDto createUser(UserRequestDto userRequestDto);
    List<UserResponseDto> getAllUser();
    UserResponseDto getUserById(Long userId);
    UserResponseDto updateUser(UserRequestDto userRequestDto,Long userId);
    void deleteUser(Long userId);
}
