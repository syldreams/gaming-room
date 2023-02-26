import { TestBed } from '@angular/core/testing';

import { RequetesService } from './requetes.service';

describe('RequetesService', () => {
  let service: RequetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
