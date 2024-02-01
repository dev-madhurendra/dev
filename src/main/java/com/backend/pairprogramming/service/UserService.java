package com.backend.pairprogramming.service;

import com.backend.pairprogramming.dto.UserRequestDto;
import com.backend.pairprogramming.dto.UserResponseDto;

import java.util.List;

public interface UserService {

    UserResponseDto createUser(UserRequestDto user);
    List<UserResponseDto> getAllUser();
    List<UserResponseDto> splitExpanses(Long payeeId,List<Long> userIds);
    UserResponseDto payBill(Long userId, Long totalBill);

}
