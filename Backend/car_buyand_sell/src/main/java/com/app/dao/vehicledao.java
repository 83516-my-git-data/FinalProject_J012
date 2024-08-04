package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.user;
import com.app.entities.vehicle;

public interface vehicledao extends JpaRepository<vehicle, Long>
{

}
