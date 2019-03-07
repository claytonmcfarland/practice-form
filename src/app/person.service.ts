import { Injectable } from '@angular/core';
import { person } from './person-form/person-information/person'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  login(p: person) {
    //initialize array based on what is already in local storage
    let itemsArray = localStorage.getItem("person-items")
    ? JSON.parse(localStorage.getItem("person-items"))
    : [];

    //push new item into local storage
    var newId = this.getId();
    p.Id = newId;
    itemsArray.push(p);
    localStorage.setItem("person-items", JSON.stringify(itemsArray));
  }

  //id is the id of the person to be deleted
  //edit the the new form data after being edited
  edit(id, edit) {
    let temp: any[] = JSON.parse(localStorage.getItem("person-items"));
    var index = temp.findIndex(
      val =>
        val.id == id
    );
    temp[index].name = edit.name;
    temp[index].number = edit.number;
    temp[index].email = edit.email;
    localStorage.setItem("person-items", JSON.stringify(temp));
  }

  delete(id){
    let temp: any[] = JSON.parse(localStorage.getItem("person-items"));
    var index = temp.findIndex(
      val =>
        val.id == id
    );
    temp.splice(index, 1);
    localStorage.setItem("person-items", JSON.stringify(temp));
  }

  getId() {
    let idArray = localStorage.getItem("person-ids") 
      ? JSON.parse(localStorage.getItem("person-ids"))
      : [];

    var i;
    for(i = 0; i < idArray.length; i++){
      if(idArray[i] == 0){
        idArray[i] = 1;
        localStorage.setItem("person-ids", JSON.stringify(idArray));
        return i;
      }
    }
    idArray.push(1);
    localStorage.setItem("person-ids", JSON.stringify(idArray));
    return idArray.length;
  }
}
