package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.user;

public interface userdao extends JpaRepository<user, Long>
{
	Optional<user> findByEmail(String email);
    user findByEmailAndPassword(String email, String password);
   // List<user> findAll

}
