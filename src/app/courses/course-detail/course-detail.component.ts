import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
    course!: { id: number, title: string, image: string, description: string }

    constructor(private route: ActivatedRoute) {
        console.log(this.course)
    }

    ngOnInit(): void {
        this.course = {
            id: this.route.snapshot.params['id'],
            title: this.route.snapshot.params['title'],
            image: this.route.snapshot.params['image'],
            description: this.route.snapshot.params['description'],
        }
    }

}
