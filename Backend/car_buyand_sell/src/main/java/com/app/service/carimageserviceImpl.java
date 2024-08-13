package com.app.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
//import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import javax.transaction.Transactional;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.customexceptions.IOException;

//import com.app.customexceptions.runtimeExe;

@Service
@Transactional
public class carimageserviceImpl implements carImageService {

	@Override
	public String uploadImage(String path, MultipartFile file) throws java.io.IOException {
		String name=file.getOriginalFilename();
		
		String randomID=UUID.randomUUID().toString();
		String filename=randomID.concat(name.substring(name.lastIndexOf('.')));
		
		String filepath=path+File.separator+filename;
		
		File f=new File(path);
		if(!f.exists())
		{
			f.mkdir();
		}
		
		Files.copy(file.getInputStream(), Paths.get(filepath));
		
//		try {
//			Files.copy(file.getInputStream(), Paths.get(filepath));
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			
//		}
		return filename;
	}

	@Override
	public InputStream getimage(String path, String filename) throws FileNotFoundException {
		String fullpath=path+File.separator+filename;
		InputStream s=new FileInputStream(fullpath);
		return s;
	}

}
