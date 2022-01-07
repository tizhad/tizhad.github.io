import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "tizhad";
  courseList = [
      {name: 'The Web Developer Bootcamp 2022', description: 'Good', rate: 4},
    {name: 'HTML & CSS', description: 'Awesome', rate: 4.2},
    {name: 'Javascript 2021', description: 'Awesome', rate: 4}
  ];

  onCourseAdded(newCourseData: {name: string, description: string, rate: number}){
    this.courseList.push({
      name: newCourseData.name,
      description: newCourseData.description,
      rate: newCourseData.rate
    })
  }
}
