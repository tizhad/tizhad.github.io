import {Component, ElementRef, HostListener, OnInit} from "@angular/core";

@Component({
    selector: "app-courses",
    templateUrl: "./courses.component.html",
    styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {

    @HostListener('document:click', ['$event'])
    clickedOutsideListener(event: Event) {
        if (this.isOutside(event)) {
            this.showFilterDropdown = false;
            this.showSortDropdown = false;
        }
    }

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
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
            image: "https://www.wphandleiding.nl/wp-content/uploads/2021/06/overbodige-css-in-wordpress-scaled.jpg",
            rate: 4

        },
        {
            title: "javaScript best course",
            teacher: "a",
            description: " This is great course that you need.",
            image: "https://www.techzine.nl/wp-content/uploads/2021/07/shutterstock_1062509657-scaled.jpg",
            rate: 2
        },
        {
            title: "Security",
            teacher: "c",
            description: " This is great course that you need.",
            image: "http://www.tiempo-secure.com/wp-content/uploads/Page_Home_396946494.jpg",
            rate: 2

        },
        {
            title: "HTML best course",
            teacher: "b",
            description: " This is great course that you need.",
            image: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
            rate: 5
        },
        {
            title: "CSS best course",
            teacher: "c",
            description: " This is great course that you need.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-oIpN0ZXDoxXzoGGQsoMXf7ECNIH_E08eQ&usqp=CAU",
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

    private isOutside(event: Event): boolean {
        console.log("isOutside", event, this.el)
        return !this.el.nativeElement.contains(event.target);
    }
}


export class CourseList {
    title?: string;
    teacher?: string;
    releaseDate?: number;
    image?: string;
    description?: string;
}

