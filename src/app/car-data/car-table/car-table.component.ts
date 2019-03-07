import { Component, ViewChild, OnInit } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { MatDialog } from "@angular/material/dialog";
import { CarService } from 'src/app/car.service';
import { CarDialogComponent } from 'src/app/dialog/car-dialog/car-dialog.component';

@Component({
  selector: "car-table",
  templateUrl: "./car-table.component.html",
  styleUrls: ["./car-table.component.css"]
})
export class CarTableComponent implements OnInit {
  rows = [];
  temp = [];
  filteredData = [];

  constructor(public dialog: MatDialog, private carService: CarService) {}

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.init();
  }

  init() {
    //get data to be used late
    const data = JSON.parse(localStorage.getItem("car-items"));
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
    this.carService.delete(row.id);
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
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: "500px",
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.init();
    });
  }

  newCar(){
    const dialogRef = this.dialog.open(CarDialogComponent, {
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
        d.make.toLowerCase().indexOf(val) !== -1 ||
        d.model.toLowerCase().indexOf(val) !== -1 ||
        d.year.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.rows = filteredData;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
