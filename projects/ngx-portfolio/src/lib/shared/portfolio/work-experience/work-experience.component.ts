import { Component, Input, OnInit } from '@angular/core';
import { WorkEx } from '../../models';

@Component({
  selector: 'lib-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @Input()
  workEx!: WorkEx[];
  constructor() { }

  ngOnInit(): void {
  }

}
