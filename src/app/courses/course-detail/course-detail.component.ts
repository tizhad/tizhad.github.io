import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: {id: number, name: string, rate: number, description: string}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.course = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      description: this.route.snapshot.params['description'],
      rate: this.route.snapshot.params['rate'],
    };
    this.route.params.subscribe((params: Params) => {
      this.course.id = params['id'];
      this.course.name = params['name'];
      this.course.description  = params['description'];
      this.course.rate = params['rate'];
    })
  }

}
