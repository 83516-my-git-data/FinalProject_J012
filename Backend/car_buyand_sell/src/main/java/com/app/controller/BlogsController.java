package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.carImagesdao;
import com.app.dao.vehicledao;
import com.app.dto.ApiResponse;
import com.app.dto.addBlogsDto;
import com.app.entities.carImages;
import com.app.entities.vehicle;
import com.app.service.blogsService;
import com.app.service.carImageService;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = "http://localhost:3000")
public class BlogsController 
{

	@Autowired
	carImageService carimageservice;
	
	@Autowired
	vehicledao vd;
	
	@Autowired
	carImagesdao cid;

	@Autowired
	blogsService blogsService;
	
	
	@Value("blogs")
	private String path;
	
	@PostMapping("/add")
	public ResponseEntity<?> uploadimage(@RequestParam("image") MultipartFile image ,addBlogsDto dto
		)
	{
		
		String imagename;
		try {
			imagename = carimageservice.uploadImage(path, image);
			
			return ResponseEntity.status(HttpStatus.CREATED).body(blogsService.addBlog(dto ,imagename));
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	@DeleteMapping("/delete/{blogId}")
	public void deleteBlog(@PathVariable Long blogId)
	{
		blogsService.deleteBlog(blogId);
	}
}
