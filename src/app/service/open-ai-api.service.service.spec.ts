import { TestBed } from '@angular/core/testing';

import { OpenAiApiService } from './open-ai-api.service.service';

describe('OpenAiApiServiceService', () => {
  let service: OpenAiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
