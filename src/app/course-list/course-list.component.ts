import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{

  courseList: Course[] = [
    new Course('Cornichons', false),
    new Course('Raclette', true),
    new Course('Pommes de Terre', true),
    new Course('Salade', false),
    new Course('Charcuterie', true),
    new Course('Oignons', false),
    new Course('Vin Blanc', true),
  ];
  ngOnInit() {


  }
}
