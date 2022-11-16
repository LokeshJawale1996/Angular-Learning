import { Component, OnInit } from '@angular/core';
import { EMPLOYEELIST } from '../data/employeeList';

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
  constructor() {}

  ngOnInit(): void {}


  employees: any = [
    {
      id: 1,
      name: 'lokesh jawale',
      designation: 'software engineer trainee',
      location:"pune"
    },
    {
      id: 2,
      name: 'mayur warade',
      designation: 'testing enginer',
      location:"ahemdabad"
    },
    {
      id: 3,
      name: 'kartik kumbhakarna',
      designation: 'software engineer trainee',
      location:"nasik"
    },
    {
      id: 4,
      name: 'dhanaji waghmode',
      designation: 'seniour engineer',
      location:'solapur'
    },
    {
      id: 5,
      name: 'ajay virkar',
      designation: 'lead engineer',
      location:'sangali'
    },
    {
      id: 6,
      name: 'ajinkya jagdale',
      designation: 'HR',
      location:"karad"
    },
  ];
}
