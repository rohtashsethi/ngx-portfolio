import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from '../../../models';

@Component({
  selector: 'lib-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input()
  hobby!: Hobby;

  constructor() { }

  ngOnInit(): void {
  }

}
