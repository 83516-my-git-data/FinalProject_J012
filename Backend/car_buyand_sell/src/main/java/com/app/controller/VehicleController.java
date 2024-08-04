package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.addvehicleReqdto;
import com.app.service.VehicleService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/vehicle")

public class VehicleController 
{
	@Autowired
	VehicleService vehicleservice;
	
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
