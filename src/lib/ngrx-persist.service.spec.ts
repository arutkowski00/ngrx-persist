import { TestBed, inject } from '@angular/core/testing';

import { NgrxPersistService } from './ngrx-persist.service';

describe('NgrxPersistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgrxPersistService]
    });
  });

  it('should be created', inject([NgrxPersistService], (service: NgrxPersistService) => {
    expect(service).toBeTruthy();
  }));
});
