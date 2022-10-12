import { TestBed } from '@angular/core/testing';

import { AssociatedPartiesService } from './associated-parties.service';

describe('AssociatedPartiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociatedPartiesService = TestBed.get(AssociatedPartiesService);
    expect(service).toBeTruthy();
  });
});
