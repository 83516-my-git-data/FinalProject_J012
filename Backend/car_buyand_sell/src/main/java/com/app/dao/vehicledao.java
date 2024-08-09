package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.user;
import com.app.entities.vehicle;

public interface vehicledao extends JpaRepository<vehicle, Long>
{
    List<vehicle> findByUser(user u);
   // List<vehicle> findByUserId(Long userid);
}
