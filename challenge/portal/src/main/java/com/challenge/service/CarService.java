package com.challenge.service;

import com.challenge.model.Car;

import java.util.List;

public interface CarService {

    Car save(Car car);
    List<Car> findAll();
    Car findOne(long id);
    void delete(long id);
}
