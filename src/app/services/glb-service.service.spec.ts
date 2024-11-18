import { TestBed } from '@angular/core/testing';

import { GlbServiceService } from './glb-service.service';

describe('GlbServiceService', () => {
  let service: GlbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
