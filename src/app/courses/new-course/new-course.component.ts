import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  @Output() courseAdded = new EventEmitter<{name: string, description: string, rate: number}>();
  @ViewChild('courseName') newCourseName : ElementRef;
  @ViewChild('courseDescription') courseDescription : ElementRef;
  @ViewChild('courseRate') courseRate : ElementRef;

  // newCourseName: string;
  // newCourseDescription: string;
  // newCourseRate: number;

  constructor() { }

  onNewCourseAdded(){
    this.courseAdded.emit({
      name: this.newCourseName.nativeElement.value,
      description: this.courseDescription.nativeElement.value,
      rate: this.courseRate.nativeElement.value
    })
  }

  ngOnInit(): void {
  }
}
