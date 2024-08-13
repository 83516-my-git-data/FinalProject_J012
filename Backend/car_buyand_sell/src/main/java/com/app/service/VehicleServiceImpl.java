package com.app.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.hibernate.engine.jdbc.StreamUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.carImagesdao;
import com.app.dao.userdao;
import com.app.dao.vehicledao;
import com.app.dto.ApiResponse;
import com.app.dto.addvehicleReqdto;
import com.app.dto.carDetailsDto;
import com.app.dto.getAllCarsDto;
import com.app.entities.carImages;
import com.app.entities.user;
import com.app.entities.vehicle;

//import ch.qos.logback.core.joran.conditional.ThenOrElseActionBase;

@Service
@Transactional

public class VehicleServiceImpl implements VehicleService
{
//	@Autowired
//	ModelMapper mapper;
	
	
	
	@Autowired
	userdao userdao;
	
	@Autowired
	vehicledao vehicledao;
	
	@Autowired
	carImagesdao carimagedao;
	
	
	
	@Value("images")
	private String path;
	
	@Autowired
	private carImageService carimageservice;
	
	
	
	private final String baseUrl = "http://localhost:8080/images/";
	
	public VehicleServiceImpl()
	{
		
	}

	@Override
	public ApiResponse addvehicle(addvehicleReqdto dto) 
	{
//		user user=userdao.findById(dto.getUserid()).
//		orElseThrow(()->new ResourceNotFoundException("user not found"));
		user user=userdao.findById(dto.getUserid()).orElseThrow(()-> new ResourceNotFoundException("user not found "));
		
		//java.sql.Date d= Date.parse(dto.getYearofpurchase());
//		
//		String s=String.valueOf(dto.getYearofpurchase());
//		Date d=Date.parse(s);
		vehicle v= new vehicle();
		v.setAskingPrice(dto.getAskingPrice());
		v.setKmdriven(dto.getKmdriven());
		v.setLocation(dto.getLocation());
		v.setMake(dto.getMake());
		v.setUser(user);
		v.setMileage(dto.getMileage());
		v.setModel(dto.getModel());
		v.setOwnership(dto.getOwnership());
		v.setVarient(dto.getVarient());
		v.setVehicleNumber(dto.getVehicleNumber());
		v.setYearofpurchase(java.sql.Date.valueOf(dto.getYearofpurchase()));
		
		vehicledao.save(v);
		// TODO Auto-generated method stub
		return new ApiResponse("Car added succesfully");
	}

	

	@Override
	public List<getAllCarsDto> getAllVehicles() {
		// TODO Auto-generated method stub
		
		List<user>userlist=userdao.findAll();
		List<getAllCarsDto>carlistDetails=new ArrayList<getAllCarsDto>();
		for(user u:userlist) 
		{
			List<vehicle>vehiclelist=vehicledao.findByUser(u);
			
			for(vehicle v:vehiclelist)
			{
		  List<String> imageUrls = carimagedao.findByVehicleId(v.getId())
	                .stream()
	                .map(carImage -> baseUrl + carImage.getImage())
	                .collect(Collectors.toList());

		  getAllCarsDto getAllCarDetails=new getAllCarsDto();
		  getAllCarDetails.setAskingPrice(v.getAskingPrice());
		  getAllCarDetails.setMake(v.getMake());
		  getAllCarDetails.setImages(imageUrls);
		  carlistDetails.add(getAllCarDetails);


			}
		}
		
		

		return carlistDetails;
	}

	@Override
	public String deleteAllImages(Long vehicleId) 
	{
		// TODO Auto-generated method stub
		vehicle vehicle=vehicledao.findById(vehicleId).orElseThrow(()-> new ResourceNotFoundException("Invalid vehicle id"));
		List<carImages> imagelist=carimagedao.findByVehicleId(vehicleId);
		for(carImages c:imagelist)
		{
			carimagedao.delete(c);
		}
		
	//	vehicledao.delete(vehicle);
		return new String("image deleted");
		
	}

	@Override
	public String deleteVehicle(Long vehicleId) {
		vehicle vehicle=vehicledao.findById(vehicleId).orElseThrow(()-> new ResourceNotFoundException("Invalid vehicle id"));
		List<carImages> imagelist=carimagedao.findByVehicleId(vehicleId);
		for(carImages c:imagelist)
		{
			carimagedao.delete(c);
		}
		
		vehicledao.delete(vehicle);
		return new String("vehicle deleted");
	}

	
	
	
	@Override
	public ApiResponse addvehicleandImage(addvehicleReqdto dto, MultipartFile image) {
	    user user = userdao.findById(dto.getUserid()).orElseThrow(() -> new ResourceNotFoundException("User not found"));

	    vehicle v = new vehicle();
	    v.setAskingPrice(dto.getAskingPrice());
	    v.setKmdriven(dto.getKmdriven());
	    v.setLocation(dto.getLocation());
	    v.setMake(dto.getMake());
	    v.setUser(user);
	    v.setMileage(dto.getMileage());
	    v.setModel(dto.getModel());
	    v.setOwnership(dto.getOwnership());
	    v.setVarient(dto.getVarient());
	    v.setVehicleNumber(dto.getVehicleNumber());

	    
	    try {
	        v.setYearofpurchase(java.sql.Date.valueOf(dto.getYearofpurchase()));
	    } catch (IllegalArgumentException e) {
	        throw new RuntimeException("Invalid date format for year of purchase. Please use yyyy-mm-dd format.");
	    }

	    vehicle v2 = vehicledao.save(v);

	    String imagename;
	    try {
	        imagename = carimageservice.uploadImage(path, image);
	        carImages ci = new carImages();
	        ci.setVehicle(v2);
	        ci.setImage(imagename);
	        carimagedao.save(ci);
	    } catch (IOException e) {
	        e.printStackTrace();
	        throw new RuntimeException("Error while uploading image");
	    }

	    return new ApiResponse("Car added successfully");
	}

	@Override
	public List<vehicle> getFilteredAndSortedVehicles(String model, String sortBy, String sortOrder) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortOrder), sortBy);

        if (model != null && !model.isEmpty()) {
            return vehicledao.findByModelContainingIgnoreCase(model, sort);
        } else {
            return vehicledao.findAll(sort);
        }
    }


	

}
