package com.challenge.dao;

import com.challenge.model.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarDao extends CrudRepository<Car, Long> {
    //Car findByCarname(String username);
}
