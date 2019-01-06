import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Car} from "../model/car.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getCar()
      .subscribe( data => {
        console.log(data)
          this.cars = data;
      });
  }

  deleteCar(user: Car): void {
    this.apiService.deleteCar(user.id)
      .subscribe( data => {
        debugger
        this.cars = this.cars.filter(u => u !== u);
      })
  };

  editCar(car: Car): void {
    window.sessionStorage.removeItem("editCarId");
    window.sessionStorage.setItem("editCarId", car.id.toString());
    this.router.navigate(['edit-car']);
  };

  addCar(): void {
    this.router.navigate(['add-car']);
  };
}
