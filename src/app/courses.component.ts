import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { Component } from "@angular/core";


@Component({
        selector: "courses",
        template: `
        <h2>{{ title }}</h2>
        <ul>
                <li *ngFor="let course of courses">
                        {{ course }}
                </li>
        </ul>
        `
})

export class CoursesComponent{
        title = "List of courses";
        courses;

        // CoursesComponent has a dependency CoursesService, 
        //so we should pass an instance of CoursesService as a
        // parameter to CoursesComponent => Dependency injection: We 
        //injected CoursesService in Courses Component
        
        constructor(coursesService: CoursesService){
                
                this.courses = coursesService.getCourses();
        }
}