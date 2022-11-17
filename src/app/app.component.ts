import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit
 {
  title = 'angular-course';
  courses=COURSES;
  
  @ViewChildren(CourseCardComponent, {read:ElementRef})
  cards:QueryList<ElementRef> | undefined;

  @ViewChild('cardRef1',{read:ElementRef})
  card1:  ElementRef | undefined;

  @ViewChild('cardRef2',{read:ElementRef})
  card2:ElementRef | undefined;

  @ViewChild('container')
  containerDiv:ElementRef | undefined;
   startDate = new Date(2000,0,1);

   constructor(){
    console.log("card1", this.card1);

   }
   ngAfterViewInit():void{
    // console.log("card1", this.card1);
    // this.cards?.changes.subscribe(
    //   cards=> console.log(cards)
    // );
    console.log(this.cards)

   }
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  onCourseSelected(course:Course){
  console.log("card1", this.card1);
  console.log("card2", this.card2);
  console.log("containerDiv", this.containerDiv);


}
onCourseEdited(){
  this.courses.push(
    {
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      lessonsCount: 10,
      
    }
  )
  }
}
