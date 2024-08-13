package com.app.entities;

import java.sql.Blob;

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
@Table(name= "carImage")
@Getter
@Setter
@ToString

public class carImages 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	private String image;
	
	@ManyToOne
	@JoinColumn(nullable = false)
	private vehicle vehicle;

	public carImages() {
		super();
	}

}
