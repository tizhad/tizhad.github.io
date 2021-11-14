import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CoursesComponent} from "./courses/courses.component";

const appRoutes: Routes = [
    {path: '', component: CoursesComponent},
    {path: 'detail/:id/:title', component: CourseDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
