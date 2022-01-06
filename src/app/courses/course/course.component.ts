import {Component, Input, OnInit} from '@angular/core';
//
// export class CourseDefinition {
//   title: string;
//   author: string;
//   rate: number
// }

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseElement: {name: string, description: string, rate: number};

  constructor() { }

  ngOnInit(): void {
  }

}
