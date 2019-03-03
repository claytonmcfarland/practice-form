import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormValidators } from "./form.validators";
import { person } from './person';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: "person-information",
  templateUrl: "./person-information.component.html",
  styleUrls: ["./person-information.component.css"]
})
export class PersonInformationComponent implements OnInit {
  form: FormGroup;
  @Input("data") formData;
  @Output() savedEvent = new EventEmitter();
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    console.log("from PersonInformation component", this.formData);
    if (this.formData != null) {
      this.form = this.buildEditForm();
    } else {
      this.form = this.buildForm();
    }
  }

  buildForm() {
    return new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        FormValidators.mustContainSpace
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      number: new FormControl("", [
        Validators.required,
        FormValidators.invalidPhoneNumber
      ])
    });
  }
  buildEditForm() {
    return new FormGroup({
      name: new FormControl(this.formData.name, [
        Validators.required,
        Validators.minLength(3),
        FormValidators.mustContainSpace
      ]),
      email: new FormControl(this.formData.email, [
        Validators.required,
        Validators.email
      ]),
      number: new FormControl(this.formData.number, [
        Validators.required,
        FormValidators.invalidPhoneNumber
      ])
    });
  }

  login() {
    // if(this.form.get('name').invalid || this.form.get('email').invalid /*|| this.form.get('number').invalid*/){
    if (this.form.invalid) {
      this.form.setErrors({
        invalidLogin: true
      });
    } else {
      let p = new person(this.form.value);
      this.personService.login(p);
      this.form = this.buildForm();
      this.savedEvent.emit();
    }
  }

  edit() {
    let tempId = this.formData.id;
    let editPerson = this.form.value;
    this.personService.edit(tempId, editPerson);
    this.savedEvent.emit();
  }

  clear() {
    localStorage.clear();
  }

  get name() {
    return this.form.get("name");
  }

  get email() {
    return this.form.get("email");
  }

  get number() {
    return this.form.get("number");
  }
}
