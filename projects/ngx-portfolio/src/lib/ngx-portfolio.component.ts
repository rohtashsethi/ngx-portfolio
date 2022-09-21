import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from './shared/models';

@Component({
  selector: 'ngx-portfolio',
  template: `
    <portfolio [portfolio]="portfolio"></portfolio>
  `,
  styles: [
  ]
})
export class NgxPortfolioComponent implements OnInit {
  @Input()
  portfolio!: Portfolio;

  constructor() { }

  ngOnInit(): void {
  }

}
