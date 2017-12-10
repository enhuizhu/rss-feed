import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('test getPath function', inject([ApiService], (service: ApiService) => {
    const expectResult = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=http://test';
    expect(service.getPath('http://test')).toBe(expectResult);
  }));
});
