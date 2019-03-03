import { Component, ViewChild, OnInit } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { MatDialog } from "@angular/material/dialog";
import { PersonService } from 'src/app/person.service';
import { PersonDialogComponent } from 'src/app/dialog/person-dialog/person-dialog.component';

@Component({
  selector: "person-table",
  templateUrl: "./person-table.component.html",
  styleUrls: ["./person-table.component.css"]
})
export class PersonTableComponent implements OnInit {
  rows = [];
  temp = [];
  filteredData = [];

  constructor(public dialog: MatDialog, private personService: PersonService) {}

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.init();
  }

  init() {
    //get data to be used late
    const data = JSON.parse(localStorage.getItem("items"));
    if (!data) {
      alert("No data to display");
      return;
    }
    //console.log(data);

    //add data to the table
    this.rows = [];
    data.forEach(element => {
      this.rows.push(element);
    });
    this.filteredData = this.rows;
    this.temp = this.rows;
    console.log(this.rows);
  }

  clear() {
    localStorage.clear();
  }

  delete(row: any) {
    this.personService.delete(row.id);
    this.init();

    /*
    let temp: any[] = JSON.parse(localStorage.getItem("items"));
    var index = temp.findIndex(
      val =>
        val.id == row.id
    );
    temp.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(temp));
    */
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: "500px",
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.init();
    });
  }

  newPerson(){
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.init();
    });
  }

  filter(event) {
    this.filteredData = this.rows;
    const val = event.target.value.toLowerCase();

    // filter our data
    const filteredData = this.temp.filter(function(d) {
      return (
        d.name.toLowerCase().indexOf(val) !== -1 ||
        d.email.toLowerCase().indexOf(val) !== -1 ||
        d.number.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.rows = filteredData;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
