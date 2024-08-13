package com.app.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.carImagesdao;
import com.app.dao.vehicledao;
import com.app.dto.ApiResponse;
import com.app.dto.addvehicleReqdto;
import com.app.dto.carDetailsDto;
import com.app.dto.getAllCarsDto;
import com.app.entities.carImages;
import com.app.entities.vehicle;
import com.app.service.VehicleService;
import com.app.service.carImageService;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin(origins = "http://localhost:3000")

public class VehicleController 
{
	@Autowired
	VehicleService vehicleservice;
	
	@Autowired
	carImageService carimageservice;
	
	@Autowired
	vehicledao vd;
	
	@Autowired
	carImagesdao cid;
	
	@Value("images")
	private String path;
	
	private final String baseUrl = "http://localhost:8080/images/";
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addvehicle(@RequestBody addvehicleReqdto dto)
	{
		try
		{
			return ResponseEntity.status(HttpStatus.CREATED).body(vehicleservice.addvehicle(dto));
		}
		catch(RuntimeException e)
		{
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
		//return null;
		
	}
	
	
	
}
