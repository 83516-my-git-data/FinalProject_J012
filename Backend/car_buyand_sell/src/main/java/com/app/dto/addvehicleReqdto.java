
package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class addvehicleReqdto {
    private Long userid;
    private String make;
    private String model;
    private String yearofpurchase; // Change to String for compatibility with form data
    private Float kmdriven;
    private Float mileage;
    private String vehicleNumber;
    private String varient;
    private Integer ownership;
    private String location;
    private Float askingPrice;
}