package com.crud.backend.controller;

import com.crud.backend.entity.User;
import com.crud.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newuser) {
        userRepository.save(newuser);
        return newuser;
    }

    @GetMapping("/users")
    List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/user/{id}")
    User updateUser(@RequestBody User updateuser , @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updateuser.getUsername());
            user.setName(updateuser.getName());
            user.setEmail(updateuser.getEmail());
            return userRepository.save(user);
        }).orElse(null);
    }

    @DeleteMapping("/user/{id}")
    User deleteById(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            return null;
        }
        User deletedUser = getUserById(id);
        userRepository.deleteById(id);
        return deletedUser;
    }
}
