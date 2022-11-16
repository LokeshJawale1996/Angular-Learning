import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgForDemoComponent } from './directive/ng-for-demo/ng-for-demo.component';
import { NgIfDemoComponent } from './directive/ng-if-demo/ng-if-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    NgForDemoComponent,
    NgIfDemoComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
