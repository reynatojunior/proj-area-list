import { TestBed } from '@angular/core/testing';

import { ServAuthapiService } from './serv-authapi.service';

describe('ServAuthapiService', () => {
  let service: ServAuthapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAuthapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
