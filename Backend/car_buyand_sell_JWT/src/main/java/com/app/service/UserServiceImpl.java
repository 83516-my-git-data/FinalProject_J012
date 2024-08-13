package com.app.service;

import com.app.dao.UserDAO;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private PasswordEncoder passwordEncorder;

    @Override
    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncorder.encode( userDTO.getPassword())); // Handle password encoding later
        user.setMobileNumber(userDTO.getMobileNumber());

        // Directly convert the role string to UserRole
        try {
            user.setRole(userDTO.getRole()); // Convert String to Enum
        } catch (IllegalArgumentException e) {
            // Handle the case where the role is not valid
            throw new RuntimeException("Invalid role provided: " + userDTO.getRole());
        }

        return userDAO.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userDAO.findById(id);
    }

    @Override
    public User findByEmail(String email) {
        return userDAO.findByEmail(email).orElse(null); // Handle Optional properly
    }

    @Override
    public void deleteById(Long id) {
        userDAO.deleteById(id);
    }

	@Override
	public User findByEmailAndPassword(String email, String password) {
		
		return userDAO.findByEmailAndPassword(email, password);
	}
}
