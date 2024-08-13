package com.app.service;

import java.text.ParseException;

import com.app.dto.addBlogsDto;

public interface blogsService 
{
	String addBlog(addBlogsDto dto,String imagename) ;
	
	void deleteBlog(Long blogId);

}
