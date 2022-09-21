import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../models';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolio!: Portfolio;

  constructor() { }

  ngOnInit(): void {
  }

}
