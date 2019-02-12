import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import mockdata from '../mock-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
projects: Project[];
  constructor() { }

  ngOnInit() {
    this.projects = mockdata.Project;

  }

}
