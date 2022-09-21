import { Component, Input, OnInit } from '@angular/core';
import { Intro } from '../../models';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input()
  intro!: Intro;

  constructor() { }

  ngOnInit(): void {
  }

}
