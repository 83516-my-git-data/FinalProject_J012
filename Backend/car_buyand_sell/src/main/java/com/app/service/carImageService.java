package com.app.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

public interface carImageService 
{
	String uploadImage(String path, MultipartFile file) throws IOException;
	InputStream getimage(String path,String filename) throws FileNotFoundException;
}
