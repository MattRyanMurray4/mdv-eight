import { TestBed } from '@angular/core/testing';

import { GangstersService } from './gangsters.service';

describe('GangstersService', () => {
  let service: GangstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GangstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
