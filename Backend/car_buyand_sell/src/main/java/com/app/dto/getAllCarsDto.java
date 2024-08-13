package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class getAllCarsDto 
{

	//private Long userId;
    private String make;
    
    private float askingPrice;
    private List<String> images;
}
