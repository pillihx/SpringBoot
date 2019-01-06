import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createCar(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-car']);
      });
  }

}
