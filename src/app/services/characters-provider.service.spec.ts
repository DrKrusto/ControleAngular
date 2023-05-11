import { TestBed } from '@angular/core/testing';

import { CharactersProviderService } from './characters-provider.service';

describe('CharactersProviderService', () => {
  let service: CharactersProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
