package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.dto.addvehicleReqdto;
import com.app.dto.carDetailsDto;
import com.app.dto.getAllCarsDto;

public interface VehicleService 
{
	ApiResponse addvehicle(addvehicleReqdto dto);
	//carDetailsDto getvehicle(Long vehicleId);
	
	List<getAllCarsDto> getAllVehicles();
	String deleteAllImages(Long vehicleId);
	String deleteVehicle(Long vehicleId);
	
	ApiResponse addvehicleandImage(addvehicleReqdto dto,MultipartFile image);

}
