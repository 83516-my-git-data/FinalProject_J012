package com.app.controller;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;

import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.dto.FileResponse;
import com.app.service.carImageService;

@RestController
@RequestMapping("/images")

public class carImagesController 
{

//	
//	 @Autowired
//	   private carImageService carimageservice;
//
//	    
//
//	public carImagesController() {
//		super();
//	}
//
//	@Value("${car_buyand_sell.image}")
//	private String path;
//
//	
//	@PostMapping("/upload")
//	public ResponseEntity<FileResponse> fileUpload(
//	    @RequestParam("image") MultipartFile image
//	) {
//	    String fileName = null;
//	    try {
//	        fileName = this.carimageservice.uploadImage(path, image);
//	    } catch (IOException e) {
//	        e.printStackTrace();
//	        return new ResponseEntity<>(new FileResponse(fileName, "Image not uploaded"), HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	    return new ResponseEntity<>(new FileResponse(fileName,"image uploaded"), HttpStatus.OK);
//	}
//	
//	@GetMapping("/{imagename}")
//	public void getImage(
//			@PathVariable("imagename") String imagename,
//			HttpServletResponse response
//			) throws IOException
//	{
//		InputStream resource=this.carimageservice.getimage(path,imagename);
//		response.setContentType(MediaType.IMAGE_JPEG_VALUE);
//		StreamUtils.copy(resource,response.getOutputStream());
//	}

}
