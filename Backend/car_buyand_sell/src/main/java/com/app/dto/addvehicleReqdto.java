package com.app.dto;

import java.sql.Date;

import javax.persistence.Column;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class addvehicleReqdto 
{
	private Long userid;

	private String make;
	
	
	private String model;
	
	
	private Date yearofpurchase;
	
	
	private Float kmdriven;
	
	
	private Float mileage;
	
	
	private String vehicleNumber;
	
	
	private String varient;
	
	
	private Integer ownership;
	
	
	private String location;
	

	private Float askingPrice;

}
