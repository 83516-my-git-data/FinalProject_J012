package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.carImagesdao;
import com.app.dao.userdao;
import com.app.dao.vehicledao;
import com.app.dto.UserDTO;
import com.app.entities.carImages;
import com.app.entities.user;
import com.app.entities.vehicle;

@Service
@Transactional
public class UserServiceImpl implements UserService
{
	  @Autowired
	    private userdao userDAO;
	  
	  @Autowired
	  private vehicledao vehicledao;
	  
	  @Autowired
	  private carImagesdao cardao;
	  

	    @Override
	    public user registeruser(UserDTO userDTO) {
	        user user = new user();
	        user.setFirstname(userDTO.getFirstName());
	        user.setLastname(userDTO.getLastName());
	        user.setEmail(userDTO.getEmail());
	        user.setPassword(userDTO.getPassword()); // Handle password encoding later
	        user.setMobilenumber(userDTO.getMobilenumber());

	        // Directly convert the role string to userRole
	        

	        return userDAO.save(user);
	    }

	    @Override
	    public Optional<user> findById(Long id) {
	        return userDAO.findById(id);
	    }

	    @Override
	    public user findByEmail(String email) {
	        return userDAO.findByEmail(email).orElse(null); // Handle Optional properly
	    }

	    @Override
	    public void deleteById(Long id) 
	    {
	    	//user user=userDAO.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid user"));
	    	
	    	user user=userDAO.findById(id).orElseThrow(()-> new ResourceNotFoundException("user not found "));
	    	
	    	
	    	
	    	List<vehicle> v=vehicledao.findByUser(user);
	    	for(vehicle vd:v)
	    	{
	    		List<carImages> carimagelist=cardao.findByVehicleId(vd.getId());
	    		for(carImages ci:carimagelist)
	    		{
	    		cardao.deleteById(ci.getId());
	    		}
	    		vehicledao.deleteById(vd.getId());
	    	}
	    	
	    	
	        userDAO.deleteById(id);
	    	
	    	
	     
	    }

		@Override
		public user findByEmailAndPassword(String email, String password) {
			
			return userDAO.findByEmailAndPassword(email, password);
		}

		

}
