import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from './../../models'

@Component({
  selector: 'lib-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  @Input() hobbies: Hobby[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
