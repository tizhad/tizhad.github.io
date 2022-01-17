import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseElement: {id: number, name: string, description: string, rate: number};


  constructor(private router: Router) { }

  navigateToDetail(){
    this.router.navigate(['course-detail'])
  }

  ngOnInit(): void {
  }

}
