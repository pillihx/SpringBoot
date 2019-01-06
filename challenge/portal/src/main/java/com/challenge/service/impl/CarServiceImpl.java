package com.challenge.service.impl;

import com.challenge.dao.CarDao;
import com.challenge.model.Car;
import com.challenge.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service(value = "carService")
public class CarServiceImpl implements CarService {
	
	@Autowired
	private CarDao carDao;


	private List<SimpleGrantedAuthority> getAuthority() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
	}

	public List<Car> findAll() {
		List<Car> list = new ArrayList<>();
		carDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public Car findOne(long id) {
		return carDao.findById(id).get();
	}

	@Override
	public void delete(long id) {
		carDao.deleteById(id);
	}

	@Override
    public Car save(Car user) {
        return carDao.save(user);
    }
}
