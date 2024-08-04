package com.app.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name= "user")
@Getter
@Setter
@ToString

public class user 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userid;
	
	@Column(name="first_name",length=25)
	private String firstname;
	
	@Column(name="last_name",length=25)
	private String lastname;
	
	@Column(name="email",length=25,unique = true,nullable = false)
	private String email;
	
	@Column(name="password",length=25,nullable = false)
	private String password ;
	
	@Column(name="mobilenumber",length=25)
	private String mobilenumber;
	
	@Column(name="role",length=25)
	private String role="Customer";

	public user(String firstname, String lastname, String email, String password, String mobilenumber, String role) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.mobilenumber = mobilenumber;
		this.role = role;
	}
	
	

}
