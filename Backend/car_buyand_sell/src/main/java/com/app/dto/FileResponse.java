package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FileResponse 
{
	String filename;
	String meassge;
	public FileResponse(String filename, String meassge) {
		super();
		this.filename = filename;
		this.meassge = meassge;
	}
	

}
