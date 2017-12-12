import { TestBed, inject } from '@angular/core/testing';

import { CakeApiService } from './cake-api.service';

describe('CakeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CakeApiService]
    });
  });

  it('should be created', inject([CakeApiService], (service: CakeApiService) => {
    expect(service).toBeTruthy();
  }));
});
