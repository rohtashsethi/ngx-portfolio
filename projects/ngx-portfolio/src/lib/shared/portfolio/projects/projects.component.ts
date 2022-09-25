import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models';

@Component({
  selector: 'lib-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
