import { TestBed } from '@angular/core/testing';

import { NgxPortfolioService } from './ngx-portfolio.service';

describe('NgxPortfolioService', () => {
  let service: NgxPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
