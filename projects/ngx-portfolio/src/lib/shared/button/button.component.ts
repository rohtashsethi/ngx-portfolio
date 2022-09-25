import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = 'primary';
  @Input() label: string = 'label';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(): void {
    this.onClick.emit();
  }

}
