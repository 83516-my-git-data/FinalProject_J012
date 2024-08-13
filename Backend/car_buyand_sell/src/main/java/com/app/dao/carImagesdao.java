package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.carImages;
import com.app.entities.user;

public interface carImagesdao extends JpaRepository<carImages, Long>
{

	List<carImages> findByVehicleId(Long vehicleId);
	
}
