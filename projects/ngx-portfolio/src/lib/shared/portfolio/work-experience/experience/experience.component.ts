import { Component, Input, OnInit } from '@angular/core';
import { WorkEx } from '../../../models';

@Component({
  selector: 'lib-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  experience!: WorkEx;

  constructor() { }

  ngOnInit(): void {
  }

}
