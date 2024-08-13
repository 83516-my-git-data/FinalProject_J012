package com.app.entities;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name= "blogs")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class blogs 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="heading",length = 100)
	private String heading;
	
	@Column(name="makeofvehicle",length = 25)
	private String makeofvehicle;
	
	@Column(name="dateOfUploading")
	private Date dateOfUploading;
	
	
	@Column(name="information",length = 1000)
	private String information;
	
	@Column(name="image")
	private String image;

}
