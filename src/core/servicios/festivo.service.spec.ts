import { TestBed } from '@angular/core/testing';

import { FestivoServices } from './festivo.service';

describe('Festivo', () => {
  let service: FestivoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
