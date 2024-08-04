package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.carImagesdao;
import com.app.dao.userdao;
import com.app.dao.vehicledao;
import com.app.dto.ApiResponse;
import com.app.dto.addvehicleReqdto;
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
	
	public VehicleServiceImpl()
	{
		
	}

	@Override
	public ApiResponse addvehicle(addvehicleReqdto dto) 
	{
		user user=userdao.findById(dto.getUserid()).
		orElseThrow(()->new ResourceNotFoundException("user not found"));
		
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
		v.setYearofpurchase(dto.getYearofpurchase());
		
		vehicledao.save(v);
		// TODO Auto-generated method stub
		return new ApiResponse("Car added succesfully");
	}

}
