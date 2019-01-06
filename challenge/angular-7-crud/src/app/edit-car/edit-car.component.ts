import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Car} from "../model/car.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: Car;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let carId = window.sessionStorage.getItem("editCarId");
    if(!carId) {
      alert("Invalid action.")
      this.router.navigate(['list-car']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required]
    });
    this.apiService.getCarById(+carId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateCar(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
            alert('Car updated successfully.');
            this.router.navigate(['list-car']);
        },
        error => {
          alert(error);
        });
  }

}
