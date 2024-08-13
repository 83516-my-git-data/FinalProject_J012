package com.app.dto;

//import com.app.entities.UserRole;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String mobilenumber;
   
// Changed to enum
}
