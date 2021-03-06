import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() src: string;

  constructor() {
    this.src = '';
  }

  ngOnInit(): void {
  }

}
