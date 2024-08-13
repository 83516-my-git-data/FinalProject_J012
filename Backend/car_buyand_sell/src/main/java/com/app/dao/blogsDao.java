package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.blogs;

public interface blogsDao extends JpaRepository<blogs, Long> 
{

}
