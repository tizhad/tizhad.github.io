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
    }

    sortOptionItems = ["Title", "Teacher", "Rate"]
    filterOptionItems = ["javaScript", "html"]
    isDropdownVisible: boolean = false;
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
    sortedList = this.courseList;
    filteredList = this.courseList;


    dropdownClicked() {
        this.isDropdownVisible = !this.isDropdownVisible;
        console.log(this.isDropdownVisible)
    }

    onSortItemClicked(sortOption: string) {
        this.sortedList = this.courseList.sort((a, b) =>
            a.title.localeCompare(b.title));
        ///////
        if (this.sortedList.length)
            this.courseList = this.sortedList;
        // a.{sortOption.toLowerCase()}.localeCompare(b.{sortOption.toLowerCase()}));
    }


    onFilterItemClicked(filterOption: string) {
        this.filteredList = this.courseList.filter(course => course.title.toLowerCase().includes(filterOption.toLowerCase()));
        this.courseList = this.filteredList;
    }
}

export class CourseList {
    title?: string;
    teacher?: string;
    releaseDate?: number;
    image?: string;
    description?: string;
}


