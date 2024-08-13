package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dto.addBlogsDto;
import com.app.entities.blogs;
import com.app.service.blogsService;

import java.util.List;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = "http://localhost:3000")
public class BlogsController {

	@Autowired
	private blogsService blogsService;

	// Endpoint to add a new blog
	@PostMapping("/add")
	public ResponseEntity<String> addBlog(@RequestBody addBlogsDto dto) {
		String response = blogsService.addBlog(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	// Endpoint to update an existing blog
	@PutMapping("/update/{blogId}")
	public ResponseEntity<String> updateBlog(@PathVariable Long blogId, @RequestBody addBlogsDto dto) {
		try {
			String response = blogsService.updateBlog(blogId, dto);
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	// Endpoint to delete a blog
	@DeleteMapping("/delete/{blogId}")
	public ResponseEntity<String> deleteBlog(@PathVariable Long blogId) {
		try {
			blogsService.deleteBlog(blogId);
			return ResponseEntity.ok("Blog deleted successfully.");
		} catch (ResourceNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	// Endpoint to get a list of all blogs
	@GetMapping("/all")
	public ResponseEntity<List<blogs>> getAllBlogs() {
		List<blogs> blogsList = blogsService.getAllBlogs();
		return ResponseEntity.ok(blogsList);
	}

	// Endpoint to get a blog by its ID
	@GetMapping("/{blogId}")
	public ResponseEntity<blogs> getBlogById(@PathVariable Long blogId) {
		try {
			blogs blog = blogsService.getBlogById(blogId);
			return ResponseEntity.ok(blog);
		} catch (ResourceNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
}
