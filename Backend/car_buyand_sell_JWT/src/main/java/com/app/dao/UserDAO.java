package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.User;

import java.util.Optional;

public interface UserDAO extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
}
