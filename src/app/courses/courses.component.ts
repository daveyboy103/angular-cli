import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import {CourseService} from "../course.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses!: Course[];
  selectedCourse!: Course;

  constructor(private CourseService: CourseService, private MessagesService: MessageService) {

  }

  ngOnInit(): void {
    this.getCourses();
    this.MessagesService.add("Fetched the courses")
  }

  onSelect(course: Course) : void{
    this.selectedCourse = course;
    this.MessagesService.add("Selected course changed to " + course.name);
  }

  getCourses(): void{
    this.CourseService.getCourses().subscribe(courses => this.courses = courses);
  }
}

