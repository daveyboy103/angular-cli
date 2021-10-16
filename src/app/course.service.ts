import { Injectable } from '@angular/core';
import {Course} from "./courses/course";
import {COURSES} from "./courses/mockCourses";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() : Observable<Course[]> {
    return of (COURSES);
  }
  constructor() { }
}
