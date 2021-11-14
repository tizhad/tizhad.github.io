import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CoursesComponent} from './courses/courses.component';
import {FormsModule} from "@angular/forms";
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        CoursesComponent,
        CourseDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
