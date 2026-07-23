import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display course name', () => {

    component.courseName = 'Angular Testing';

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h2').textContent)
      .toContain('Angular Testing');

  });

  it('should emit event when button clicked', () => {

    spyOn(component.enroll, 'emit');

    component.courseName = 'Angular';

    fixture.detectChanges();

    const button =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(component.enroll.emit)
      .toHaveBeenCalledWith('Angular');

  });

  it('should call ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({
      courseName: new SimpleChange(
        '',
        'Angular',
        true
      )
    });

    expect(console.log).toHaveBeenCalled();

  });

});