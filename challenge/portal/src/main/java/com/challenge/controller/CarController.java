package com.challenge.controller;

import com.challenge.model.Car;
import com.challenge.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @RequestMapping(value="/car", method = RequestMethod.GET)
    public List<Car> listCar(){
        return carService.findAll();
    }

    @RequestMapping(value = "/car", method = RequestMethod.POST)
    public Car create(@RequestBody Car car){
        return carService.save(car);
    }

    @RequestMapping(value = "/car/{id}", method = RequestMethod.GET)
    public Car findOne(@PathVariable long id){
        return carService.findOne(id);
    }

    @RequestMapping(value = "/car/{id}", method = RequestMethod.PUT)
    public Car update(@PathVariable long id, @RequestBody Car car){
        car.setId(id);
        return carService.save(car);
    }

    @RequestMapping(value = "/car/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable(value = "id") Long id){
        carService.delete(id);
    }

}
