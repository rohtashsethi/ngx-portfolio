import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../models';

@Component({
  selector: 'lib-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()
  skills!: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
