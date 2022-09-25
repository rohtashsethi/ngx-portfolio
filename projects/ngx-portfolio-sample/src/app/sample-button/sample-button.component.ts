import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-button',
  templateUrl: './sample-button.component.html',
  styleUrls: ['./sample-button.component.scss']
})
export class SampleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(text?: string):void {
    alert('Button clicked: ' + text);
  }

}
