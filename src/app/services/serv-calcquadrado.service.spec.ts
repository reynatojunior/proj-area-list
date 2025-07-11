import { TestBed } from '@angular/core/testing';

import { ServCalcquadradoService } from './serv-calcquadrado.service';

describe('ServCalcquadradoService', () => {
  let service: ServCalcquadradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCalcquadradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
