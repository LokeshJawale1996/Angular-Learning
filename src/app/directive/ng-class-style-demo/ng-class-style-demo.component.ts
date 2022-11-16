import { Component, OnInit } from '@angular/core';
import { FRUITS } from 'src/app/data/fruits';
@Component({
  selector: 'app-ng-class-style-demo',
  templateUrl: './ng-class-style-demo.component.html',
  styleUrls: ['./ng-class-style-demo.component.css']
})
export class NgClassStyleDemoComponent implements OnInit {
  fruits = FRUITS;

  animals: any = [
    "tiger",
    'lion',
    'cheetah',
    'zebra'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  applyClass() {
    return {
      'fruit': true
    }
  }
  applyStyle() {
    return {
      'color': "red",
      'text-decoration': 'dotted',
      'font-size': "20px"
    }
  }

}
