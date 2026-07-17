import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCardComponent, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseListComponent implements OnInit {
  isLoading = true;

  courses = [
    { id: 1, name: 'Introduction to Angular', code: 'CS101', credits: 3, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'TypeScript Basics', code: 'CS102', credits: 2, gradeStatus: 'passed', enrolled: false },
    { id: 3, name: 'Web Development Fundaments', code: 'CS103', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 4, name: 'State Management with NgRx', code: 'CS104', credits: 4, gradeStatus: 'failed', enrolled: false },
    { id: 5, name: 'Unit Testing in Angular', code: 'CS105', credits: 3, gradeStatus: 'pending', enrolled: true }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.enrolled = !course.enrolled;
    }
  }

  // trackBy helps Angular optimize list rendering by re-using DOM nodes for elements whose ID hasn't changed.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}
