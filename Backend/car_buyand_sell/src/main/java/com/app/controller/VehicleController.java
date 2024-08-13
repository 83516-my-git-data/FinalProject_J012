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
	
	@PostMapping("/add/all")
	public ResponseEntity<?> addvehicleandImage(@RequestBody addvehicleReqdto dto , @RequestParam("image") MultipartFile image)
	{
		try
		{
			return ResponseEntity.status(HttpStatus.CREATED).body(vehicleservice.addvehicleandImage(dto, image));
		}
		catch(RuntimeException e)
		{
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
		//return null;
		
	}
	
	@PostMapping("/addimage/{vehicleid}")
	public ResponseEntity<?> uploadimage(@RequestParam("image") MultipartFile image ,
			@PathVariable Long vehicleid)
	{
		vehicle v=vd.findById(vehicleid).orElseThrow(()-> new ResourceNotFoundException("invalid vehicle id"));
		String imagename;
		try {
			imagename = carimageservice.uploadImage(path, image);
			carImages ci=new carImages();
			ci.setVehicle(v);
			ci.setImage(imagename);
			cid.save(ci);
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Image uploaded "));
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	 @GetMapping("/{vehicleId}")
	    public ResponseEntity<carDetailsDto> getCarDetails(@PathVariable Long vehicleId) {
	        vehicle vehicle = vd.findById(vehicleId)
	                .orElseThrow(() -> new ResourceNotFoundException("Invalid vehicle ID"));

	        List<String> imageUrls = cid.findByVehicleId(vehicleId)
	                .stream()
	                .map(carImage -> baseUrl + carImage.getImage())
	                .collect(Collectors.toList());


	        carDetailsDto carDetailsDto = new carDetailsDto();
	        carDetailsDto.setUserId(vehicle.getUser().getUserid());
	        carDetailsDto.setMake(vehicle.getMake());
	        carDetailsDto.setModel(vehicle.getModel());
	        carDetailsDto.setYearOfPurchase(vehicle.getYearofpurchase().toString());
	        carDetailsDto.setKmDriven(vehicle.getKmdriven());
	        carDetailsDto.setMileage(vehicle.getMileage());
	        carDetailsDto.setVehicleNumber(vehicle.getVehicleNumber());
	        carDetailsDto.setVariant(vehicle.getVarient());
	        carDetailsDto.setOwnership(vehicle.getOwnership());
	        carDetailsDto.setLocation(vehicle.getLocation());
	        carDetailsDto.setAskingPrice(vehicle.getAskingPrice());
	        carDetailsDto.setImages(imageUrls);

	        return ResponseEntity.ok(carDetailsDto);
	    }
	    @GetMapping
	    public ResponseEntity<List<getAllCarsDto>> getAllCarDetails()
	    {
	    	List<getAllCarsDto>CarDetailsList=vehicleservice.getAllVehicles();
	    	return ResponseEntity.ok(CarDetailsList);
	    }
	    
	    @DeleteMapping("/delete/Image/{vehicleId}")
	    public ResponseEntity<?> deleteCarImage(@PathVariable Long vehicleId)
	    {
	    	try
	    	{
	    		return ResponseEntity.status(HttpStatus.OK).body(vehicleservice.deleteAllImages(vehicleId));
	    	}
	    	catch(RuntimeException e)
	    	{
	    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    	}
	    }
	    
	    @DeleteMapping("/{vehicleId}")
	    public ResponseEntity<?> deleteVehicle(@PathVariable Long vehicleId)
	    {
	    	try
	    	{
	    		return ResponseEntity.status(HttpStatus.OK).body(vehicleservice.deleteVehicle(vehicleId));
	    	}
	    	catch(RuntimeException e)
	    	{
	    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    	}
	    }
}
