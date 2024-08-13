package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class carDetailsDto
{
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


}
