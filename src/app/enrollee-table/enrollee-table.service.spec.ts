import { TestBed } from '@angular/core/testing';

import { EnrolleeTableService } from './enrollee-table.service';

describe('EnrolleeTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolleeTableService = TestBed.get(EnrolleeTableService);
    expect(service).toBeTruthy();
  });
});
