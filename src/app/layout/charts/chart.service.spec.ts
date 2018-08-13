import { TestBed, inject } from '@angular/core/testing';

import { Chart } from './chart.service';

describe('Chart.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chart]
    });
  });

  it('should be created', inject([Chart], (service: Chart) => {
    expect(service).toBeTruthy();
  }));
});
