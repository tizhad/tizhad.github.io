import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList = [
    {id: 1, name: 'test', description: 'Good', rate: 4},
    {id: 2, name: 'HTML & CSS', description: 'Awesome', rate: 4.2},
    {id: 3, name: 'Javascript 2021', description: 'Awesome', rate: 4}
  ];
  constructor() { }
  onCourseAdded(newCourseData: {name: string, description: string, rate: number}){
    this.courseList.push({
      id: 6,
      name: newCourseData.name,
      description: newCourseData.description,
      rate: newCourseData.rate
    })
  }


  ngOnInit(): void {
  }

}
