import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgForDemoComponent } from './directive/ng-for-demo/ng-for-demo.component';
import { NgIfDemoComponent } from './directive/ng-if-demo/ng-if-demo.component';
import { NgClassStyleDemoComponent } from './directive/ng-class-style-demo/ng-class-style-demo.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    NgForDemoComponent,
    NgIfDemoComponent,
    NgClassStyleDemoComponent,
    PipeComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
