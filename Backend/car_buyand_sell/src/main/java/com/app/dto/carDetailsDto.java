package com.app.dto;

import java.util.List;

import com.app.entities.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class carDetailsDto {
	
	private Long userId;
    private String make;
    private String model;
    private String yearOfPurchase;
    private float kmDriven;
    private float mileage;
    private String vehicleNumber;
    private String variant;
    private int ownership;
    private String location;
    private float askingPrice;
    private List<String> images;
    private user user;

}
