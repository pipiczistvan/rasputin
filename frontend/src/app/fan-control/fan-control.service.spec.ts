import { TestBed, inject } from '@angular/core/testing';

import { FanControlService } from './fan-control.service';

describe('FanControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FanControlService]
    });
  });

  it('should be created', inject([FanControlService], (service: FanControlService) => {
    expect(service).toBeTruthy();
  }));
});
