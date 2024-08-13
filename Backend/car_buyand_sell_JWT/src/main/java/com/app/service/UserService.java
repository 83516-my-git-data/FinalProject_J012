package com.app.service;

import com.app.dto.UserDTO;
import com.app.entities.User;

import java.util.Optional;

public interface UserService {
    User registerUser(UserDTO userDTO);
    Optional<User> findById(Long id);
    User findByEmail(String email);
    void deleteById(Long id);
    User findByEmailAndPassword (String email, String password);
}
