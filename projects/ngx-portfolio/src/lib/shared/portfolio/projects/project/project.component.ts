import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../models';

@Component({
  selector: 'lib-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

}