package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.dto.logindto;
import com.app.entities.user;
import com.app.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	//@Autowired
	
	 @Autowired
	    private UserService userService;

	    @PostMapping("/register")
	    @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
	        try {
	            user user = userService.registeruser(userDTO);
	            return new ResponseEntity<>("User registered successfully with ID: " + user.getUserid(), HttpStatus.CREATED);
	        } catch (RuntimeException e) {
	            // Handle the case where the role is invalid or any other issues
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        }
	    }
	    
	    @PostMapping("/login")
	    @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<String> loginUser(@RequestBody logindto userDTO) {
	        try {
	            user user = userService.findByEmail(userDTO.getEmail());
	            if (user != null && user.getPassword().equals(userDTO.getPassword())) {
	                return new ResponseEntity<>("Login successful", HttpStatus.OK);
	            } else {
	                return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
	            }
	        } catch (RuntimeException e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        }
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<user> getUserById(@PathVariable Long id) {
	        return userService.findById(id)
	                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
	                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	    }

	    @GetMapping("/email/{email}")
	    public ResponseEntity<user> getUserByEmail(@PathVariable String email) {
	        user user = userService.findByEmail(email);
	        if (user != null) {
	            return new ResponseEntity<>(user, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
	        userService.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }


}
