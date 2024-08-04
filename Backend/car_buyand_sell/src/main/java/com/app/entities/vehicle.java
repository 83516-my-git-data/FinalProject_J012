package com.app.entities;

import java.sql.Date;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name= "vehicles")
@Getter
@Setter
@ToString

public class vehicle 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="make",length = 25)
	private String make;
	
	@Column(name="model",length = 25)
	private String model;
	
	@Column(name="yearofpurchase")
	private Date yearofpurchase;
	
	@Column(name="kmdriven")
	private Float kmdriven;
	
	@Column(name="mileage",length = 25)
	private Float mileage;
	
	@Column(name="vehicleNumber",length = 10,unique = true)
	private String vehicleNumber;
	
	@Column(name="varient",length = 25)
	private String varient;
	
	@Column(name="ownership")
	private Integer ownership;
	
	@Column(name="location",length = 25)
	private String location;
	
	@Column(name="askingPrice")
	private Float askingPrice;
	
	@ManyToOne
//	@JoinColumn(nullable = false)
	private user user;

	

	public vehicle() {
		super();
	}



//	public vehicle(Long id, String make, String model, Date yearofpurchase, Float kmdriven, Float mileage,
//			String vehicleNumber, String varient, Integer ownership, String location, Float askingPrice
//			) {
//		super();
//		//this.id = id;
//		this.make = make;
//		this.model = model;
//		this.yearofpurchase = yearofpurchase;
//		this.kmdriven = kmdriven;
//		this.mileage = mileage;
//		this.vehicleNumber = vehicleNumber;
//		this.varient = varient;
//		this.ownership = ownership;
//		this.location = location;
//		this.askingPrice = askingPrice;
//		//this.user = user;
//	}
	
	
	
	
	

}
