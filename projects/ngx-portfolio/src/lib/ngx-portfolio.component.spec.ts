import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPortfolioComponent } from './ngx-portfolio.component';

describe('NgxPortfolioComponent', () => {
  let component: NgxPortfolioComponent;
  let fixture: ComponentFixture<NgxPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
