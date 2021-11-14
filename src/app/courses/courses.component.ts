import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-courses",
    templateUrl: "./courses.component.html",
    styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        console.log("ngOnInit", this.courseList)
    }

    sortOptionItems = ["Title", "Teacher", "Rate"]
    filterOptionItems = ["JavaScript", "Html", "Security"]
    showFilterDropdown: boolean = false;
    showSortDropdown: boolean = false;
    courseList = [
        {
            title: "CSS best course",
            teacher: "c",
            description: " This is great course that you need.",
            image: "https://images.photowall.com/products/46379/andromeda-galaxy.jpg?h=699&q=85",
            rate: 4

        },
        {
            title: "javaScript best course",
            teacher: "a",
            description: " This is great course that you need.",
            image: "https://scx2.b-cdn.net/gfx/news/2019/galaxy.jpg",
            rate: 2
        },
        {
            title: "Security",
            teacher: "c",
            description: " This is great course that you need.",
            image: "https://images.photowall.com/products/46379/andromeda-galaxy.jpg?h=699&q=85",
            rate: 2

        },
        {
            title: "HTML best course",
            teacher: "b",
            description: " This is great course that you need.",
            image: "https://images.photowall.com/products/46379/andromeda-galaxy.jpg?h=699&q=85",
            rate: 5
        },
        {
            title: "CSS best course",
            teacher: "c",
            description: " This is great course that you need.",
            image: "https://images.photowall.com/products/46379/andromeda-galaxy.jpg?h=699&q=85",
            rate: 4

        },
    ];
    filteredList = this.courseList;

    filterList(filterOption: string) {
        this.filteredList = this.courseList.filter(course => course.title.toLowerCase().includes(filterOption.toLowerCase()));
        if (this.filteredList.length === 0) {
            this.filteredList = this.courseList
        }
    }

    sortList(sortOption: string) {
        this.filteredList = this.courseList.sort((a, b) =>
            a.title.localeCompare(b.title));
        if (this.filteredList.length === 0)
            alert("چیزی برای نمایش وجود ندارد.")
    }


    //Show all courses
    resetFilter() {
        this.filteredList = this.courseList
    }
}


export class CourseList {
    title?: string;
    teacher?: string;
    releaseDate?: number;
    image?: string;
    description?: string;
}

