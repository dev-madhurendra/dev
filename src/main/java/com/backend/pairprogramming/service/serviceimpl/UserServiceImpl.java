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
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserResponseDto createUser(UserRequestDto user) {
        User user1 = modelMapper.map(user, User.class);
        User savedUser = userRepository.save(user1);
        log.info(">>> User created successfully !");
        return UserResponseDto
                .builder()
                .id(savedUser.getId())
                .name(savedUser.getName())
                .contributionPercentage(0.0)
                .moneyContribution(0.0)
                .build();
    }

    @Override
    public List<UserResponseDto> getAllUser() {
        List<User> users = userRepository.findAll();
        log.info(">>> Get all users !");
        return users.
                stream()
                .map(user ->
                    UserResponseDto
                        .builder()
                            .id(user.getId())
                        .name(user.getName())
                        .contributionPercentage(user.getContributionPercentage())
                        .moneyContribution(user.getMoneyContribution())
                        .build()
                ).collect(Collectors.toList());
    }

    @Override
    public List<UserResponseDto> splitExpanses(Long payeeId,List<Long> userIds) {

        User payee = userRepository.findById(payeeId).orElseThrow(() -> new ResourceNotFoundException("User ", payeeId.toString()));
        List<UserResponseDto> allUsers = new ArrayList<>();
        for(int i = 0; i < userIds.size(); ++i) {
            User user = userRepository.findById(userIds.get(i)).orElseThrow(() -> new ResourceNotFoundException("User ", " id"));
            user.setContributionPercentage((double) (100/userIds.size()));
            user.setMoneyContribution(payee.getMoneyContribution()/userIds.size());
            userRepository.save(user);
            UserResponseDto updatedUserResponseDto =
                    modelMapper.map(user, UserResponseDto.class);
            allUsers.add(updatedUserResponseDto);
        }
        log.info(">>> Explited bills !");
        return allUsers;
    }

    @Override
    public UserResponseDto payBill(Long userId, Long totalBill) {
        User payee = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User ", userId.toString()));
        payee.setMoneyContribution(Double.valueOf(totalBill));
        userRepository.save(payee);
        log.info(">>> Pay bills !");
        return UserResponseDto
                .builder()
                .id(payee.getId())
                .name(payee.getName())
                .moneyContribution(payee.getMoneyContribution())
                .contributionPercentage(payee.getContributionPercentage())
                .build();
    }
}
