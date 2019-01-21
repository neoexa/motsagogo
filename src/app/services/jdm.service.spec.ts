import { TestBed } from '@angular/core/testing';

import { JdmService } from './jdm.service';

describe('JdmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JdmService = TestBed.get(JdmService);
    expect(service).toBeTruthy();
  });
});
