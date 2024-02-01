package com.devmadhurendra.crudmongodb.service;

import com.devmadhurendra.crudmongodb.dto.UserPageResponseDto;
import com.devmadhurendra.crudmongodb.dto.UserRequestDto;
import com.devmadhurendra.crudmongodb.dto.UserResponseDto;

import java.util.List;

public interface UserService {
    UserResponseDto createUser(UserRequestDto userRequestDto);
    UserPageResponseDto getAllUsers(int pageNumber, int pageSize, String sortBy, boolean sortDirIsAsc);
    UserResponseDto getUserById(Long userId);
    UserResponseDto updateUser(Long userId, UserRequestDto userRequestDto);
    void deleteUser(Long userId);
    List<UserResponseDto> getAllSearchedUser(String name);
}
