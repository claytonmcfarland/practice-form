import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormValidators } from "./form.validators";
import { car } from './car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: "car-information",
  templateUrl: "./car-information.component.html",
  styleUrls: ["./car-information.component.css"]
})
export class CarInformationComponent implements OnInit {
  form: FormGroup;
  @Input("data") formData;
  @Output() savedEvent = new EventEmitter();
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    console.log("from CarInformation component", this.formData);
    if (this.formData != null) {
      this.form = this.buildEditForm();
    } else {
      this.form = this.buildForm();
    }
  }

  buildForm() {
    return new FormGroup({
      make: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      model: new FormControl("", [Validators.required]),
      year: new FormControl("", [
        Validators.required,
        FormValidators.invalidYear
      ])
    });
  }
  buildEditForm() {
    return new FormGroup({
      make: new FormControl(this.formData.make, [
        Validators.required
      ]),
      model: new FormControl(this.formData.model, [
        Validators.required
      ]),
      year: new FormControl(this.formData.year, [
        Validators.required,
        FormValidators.invalidYear
      ])
    });
  }

  login() {
    if (this.form.invalid) {
      this.form.setErrors({
        invalidLogin: true
      });
    } else {
      let c = new car(this.form.value);
      this.carService.login(c);
      this.form = this.buildForm();
      this.savedEvent.emit();
    }
  }

  edit() {
    let tempId = this.formData.id;
    let editCar = this.form.value;
    this.carService.edit(tempId, editCar);
    this.savedEvent.emit();
  }

  clear() {
    localStorage.clear();
  }

  get make() {
    return this.form.get("make");
  }

  get model() {
    return this.form.get("model");
  }

  get year() {
    return this.form.get("year");
  }
}
