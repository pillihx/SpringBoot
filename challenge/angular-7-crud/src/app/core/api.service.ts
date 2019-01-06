import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Car} from "../model/car.model";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrlUsers: string = 'http://localhost:9090/users/';
  baseUrlCars: string = 'http://localhost:9090/cars/';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post('http://localhost:9090/' + 'oauth/token', loginPayload, {headers});
  }

  //Users
  getUsers() {
    return this.http.get(this.baseUrlUsers + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  getUserById(id: number) {
    return this.http.get(this.baseUrlUsers + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  createUser(user: User){
    return this.http.post(this.baseUrlUsers + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrlUsers + 'user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }
  deleteUser(id: number){
    return this.http.delete(this.baseUrlUsers + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  //Cars
  getCar() {
    return this.http.get(this.baseUrlCars + 'car?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  getCarById(id: number) {
    return this.http.get(this.baseUrlCars + 'car/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  createCar(car: Car){
    return this.http.post(this.baseUrlCars + 'car?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, car);
  }
  updateCar(car: Car) {
    return this.http.put(this.baseUrlCars + 'car/' + car.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, car);
  }
  deleteCar(id: number){
    return this.http.delete(this.baseUrlCars + 'car/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
