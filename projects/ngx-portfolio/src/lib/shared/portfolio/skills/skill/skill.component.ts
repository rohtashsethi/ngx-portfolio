import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../../models';

@Component({
  selector: 'lib-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input()
  skill!: Skill;
  skillMeter: string = '';

  constructor() { }

  ngOnInit(): void {
    this.skillMeter = `w-${this.skill.profociency/10}0`;
  }

}
