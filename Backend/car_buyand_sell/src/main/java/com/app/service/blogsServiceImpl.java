package com.app.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dao.blogsDao;
import com.app.dto.addBlogsDto;
import com.app.entities.blogs;

@Service
@Transactional
public class blogsServiceImpl implements blogsService {

	@Autowired
	private blogsDao blogsdao;

	@Override
	public String addBlog(addBlogsDto dto) {
		blogs blog = new blogs();
		blog.setHeading(dto.getHeading());
		blog.setInformation(dto.getInformation());
		// dateOfUploading is set automatically by @PrePersist in the entity

		blogsdao.save(blog);
		return "Blog has been uploaded successfully.";
	}

	@Override
	public String updateBlog(Long blogId, addBlogsDto dto) {
		blogs existingBlog = blogsdao.findById(blogId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Blog ID"));

		existingBlog.setHeading(dto.getHeading());
		existingBlog.setInformation(dto.getInformation());
		// dateOfUploading remains unchanged (or could be updated if needed)

		blogsdao.save(existingBlog);
		return "Blog has been updated successfully.";
	}

	@Override
	public void deleteBlog(Long blogId) {
		blogs blog = blogsdao.findById(blogId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Blog ID"));
		blogsdao.delete(blog);
	}

	@Override
	public List<blogs> getAllBlogs() {
		return blogsdao.findAll();
	}

	@Override
	public blogs getBlogById(Long blogId) {
		return blogsdao.findById(blogId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Blog ID"));
	}
}
