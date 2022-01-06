import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  @Output() courseAdded = new EventEmitter<{name: string, description: string, rate: number}>();

  newCourseName: string;
  newCourseDescription: string;
  newCourseRate: number;

  constructor() { }

  onNewCourseAdded(){
    this.courseAdded.emit({
      name: this.newCourseName,
      description: this.newCourseDescription,
      rate: this.newCourseRate
    })
  }

  ngOnInit(): void {
  }
}
