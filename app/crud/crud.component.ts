import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  newEmployeeClicked = false;

  employees = [];

  color;

  constructor() {}

  ngOnInit() {}

  model: any = {};
  model2: any = {};

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.firstname = this.employees[editEmployeeInfo].firstname;
    this.model2.lastname = this.employees[editEmployeeInfo].lastname;
    this.model2.email = this.employees[editEmployeeInfo].email;
    this.model2.birthdate = this.employees[editEmployeeInfo].birthdate;
    this.model2.basicsalary = this.employees[editEmployeeInfo].basicsalary;
    this.model2.status = this.employees[editEmployeeInfo].status;
    this.model2.group = this.employees[editEmployeeInfo].group;
    this.model2.description = this.employees[editEmployeeInfo].description;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }
}
