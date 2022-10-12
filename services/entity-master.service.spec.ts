import { TestBed } from '@angular/core/testing';

import { EntityMasterService } from './entity-master.service';

describe('EntityMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityMasterService = TestBed.get(EntityMasterService);
    expect(service).toBeTruthy();
  });
});
