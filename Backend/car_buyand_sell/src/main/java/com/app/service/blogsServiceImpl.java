package com.app.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.blogsDao;
import com.app.dto.addBlogsDto;
import com.app.entities.blogs;

@Service
@Transactional

public class blogsServiceImpl implements blogsService 
{
	
	@Autowired
	blogsDao blogsdao;

	@Override
	public String addBlog(addBlogsDto dto,String Imagename) 
	{
		
		 SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
   // Date date=Date.parse(dto.getDateOfUploading());
		 
		 
		 
	      
	        
	        blogs blogs=new blogs();
     		blogs.setMakeofvehicle(dto.getMakeofvehicle());
     		blogs.setHeading(dto.getHeading());
     		blogs.setInformation(dto.getInformation());
     	//	blogs.setDateOfUploading( dto.getDateOfUploading());
     		blogs.setImage(Imagename);
 		
 		// TODO Auto-generated method stub
 		
 		
 		if(blogs!=null)
 		{
 		blogsdao.save(blogs);
 		return "Blogs has been uploaded succesfully";
 		}
           
	    
	 
			return "Image is not  uploaded";
	}

	@Override
	public void deleteBlog(Long blogId) {
		
		blogs blogs=blogsdao.findById(blogId).orElseThrow(()-> new ResourceNotFoundException("Invalid Blog id"));
		
		blogsdao.delete(blogs);
		
	}

}
