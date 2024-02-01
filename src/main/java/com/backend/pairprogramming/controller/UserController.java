package com.backend.pairprogramming.controller;

import com.backend.pairprogramming.dto.ExplitBillDto;
import com.backend.pairprogramming.dto.UserPay;
import com.backend.pairprogramming.dto.UserRequestDto;
import com.backend.pairprogramming.dto.UserResponseDto;
import com.backend.pairprogramming.service.UserService;
import com.backend.pairprogramming.util.AppConstants;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(AppConstants.BASE_URL)
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(AppConstants.CREATE_URL)
    public ResponseEntity<UserResponseDto> createUser(
            @Valid
            @RequestBody
            UserRequestDto userRequestDto
    ) {
        UserResponseDto userResponseDto = userService.createUser(userRequestDto);
        return new ResponseEntity<>(userResponseDto, HttpStatus.CREATED);
    }

    @GetMapping(AppConstants.CREATE_URL)
    public ResponseEntity<List<UserResponseDto>> getAllUser() {
        List<UserResponseDto> userResponseDtos = userService.getAllUser();
        return new ResponseEntity<>(userResponseDtos,HttpStatus.OK);
    }

    @PutMapping(AppConstants.SPLIT_EXPANSE_URL)
    public ResponseEntity<List<UserResponseDto>> splitExpanses(
            @PathVariable Long userId,
            @RequestBody ExplitBillDto exp
            ) {
        List<UserResponseDto> userResponseDtos = userService.splitExpanses(userId, exp.getUserId());
        return new ResponseEntity<>(userResponseDtos, HttpStatus.OK);
    }

    @PutMapping(AppConstants.PAY_BILL_URL)
    public ResponseEntity<UserResponseDto> payBill(
            @PathVariable Long userId,
            @RequestBody UserPay userPay
            ) {
        UserResponseDto userResponseDto =
                userService.payBill(userId,userPay.getTotalBill());
        return new ResponseEntity<>(userResponseDto, HttpStatus.OK);
    }
}
