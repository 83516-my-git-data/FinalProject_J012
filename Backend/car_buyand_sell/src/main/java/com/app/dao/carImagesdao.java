package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.carImages;
import com.app.entities.user;

public interface carImagesdao extends JpaRepository<carImages, Long>
{

}
