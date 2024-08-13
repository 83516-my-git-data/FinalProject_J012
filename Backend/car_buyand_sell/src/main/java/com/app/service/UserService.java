package com.app.service;

import java.util.Optional;

import com.app.dto.UserDTO;
import com.app.entities.user;

public interface UserService 
{

	user registeruser(UserDTO userDTO);

	Optional<user> findById(Long id);

	user findByEmail(String email);

	void deleteById(Long id);

	user findByEmailAndPassword(String email, String password);

	  
}
