import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CourseListComponent} from "./courses/course-list/course-list.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {NewCourseComponent} from "./courses/new-course/new-course.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'course-detail/:id', component: CourseDetailComponent},
    {path: 'courses', component: CourseListComponent},
    {path: 'new-course', component: NewCourseComponent},
    {path: 'join-us', component: NewCourseComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
