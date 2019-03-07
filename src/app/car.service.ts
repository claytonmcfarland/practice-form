import { Injectable } from '@angular/core';
import { car } from './car-form/car-information/car'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  login(c: car) {
    //initialize array based on what is already in local storage
    let itemsArray = localStorage.getItem("car-items")
    ? JSON.parse(localStorage.getItem("car-items"))
    : [];

    //push new item into local storage
    var newId = this.getId();
    c.Id = newId;
    itemsArray.push(c);
    localStorage.setItem("car-items", JSON.stringify(itemsArray));
  }

  //id is the id of the person to be deleted
  //edit the the new form data after being edited
  edit(id, edit) {
    let temp: any[] = JSON.parse(localStorage.getItem("car-items"));
    var index = temp.findIndex(
      val =>
        val.id == id
    );
    temp[index].make = edit.make;
    temp[index].model = edit.model;
    temp[index].year = edit.year;
    localStorage.setItem("car-items", JSON.stringify(temp));
  }

  delete(id){
    let temp: any[] = JSON.parse(localStorage.getItem("car-items"));
    var index = temp.findIndex(
      val =>
        val.id == id
    );
    temp.splice(index, 1);
    localStorage.setItem("car-items", JSON.stringify(temp));
  }

  getId() {
    let idArray = localStorage.getItem("car-ids") 
      ? JSON.parse(localStorage.getItem("car-ids"))
      : [];

    var i;
    for(i = 0; i < idArray.length; i++){
      if(idArray[i] == 0){
        idArray[i] = 1;
        localStorage.setItem("car-ids", JSON.stringify(idArray));
        return i;
      }
    }
    idArray.push(1);
    localStorage.setItem("car-ids", JSON.stringify(idArray));
    return idArray.length;
  }
}
