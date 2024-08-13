package com.app.service;

import com.app.dto.addBlogsDto;
import com.app.entities.blogs;

import java.util.List;

public interface blogsService {
	String addBlog(addBlogsDto dto);

	String updateBlog(Long blogId, addBlogsDto dto);

	void deleteBlog(Long blogId);

	List<blogs> getAllBlogs();

	blogs getBlogById(Long blogId);
}
