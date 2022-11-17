import { Component, OnInit } from '@angular/core';
import { EMPLOYEELIST } from '../data/employeeList';
import { EMPLOYEES } from '../data/employees';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  startDate = new Date(2000, 0, 1);
  title: string = 'Loki shop';
  price: number = 9.99;
  price1: number = 87.637748489;
  rate = 0.67;

  employeeListOfNames = EMPLOYEELIST;
  employeeDetails=EMPLOYEES;
  constructor() {}

  ngOnInit(): void {}


 
}
