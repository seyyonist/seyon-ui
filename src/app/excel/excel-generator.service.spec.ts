import { TestBed, inject } from '@angular/core/testing';

import { ExcelGeneratorService } from './excel-generator.service';

describe('ExcelGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelGeneratorService]
    });
  });

  it('should be created', inject([ExcelGeneratorService], (service: ExcelGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
