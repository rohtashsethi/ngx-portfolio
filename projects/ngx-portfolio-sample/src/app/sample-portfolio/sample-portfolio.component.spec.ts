import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePortfolioComponent } from './sample-portfolio.component';

describe('SamplePortfolioComponent', () => {
  let component: SamplePortfolioComponent;
  let fixture: ComponentFixture<SamplePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
