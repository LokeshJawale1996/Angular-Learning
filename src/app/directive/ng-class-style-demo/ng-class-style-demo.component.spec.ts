import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassStyleDemoComponent } from './ng-class-style-demo.component';

describe('NgClassStyleDemoComponent', () => {
  let component: NgClassStyleDemoComponent;
  let fixture: ComponentFixture<NgClassStyleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassStyleDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassStyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
