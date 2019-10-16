/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QtyServiceService } from './qty.service';

describe('Service: QtyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QtyServiceService]
    });
  });

  it('should ...', inject([QtyServiceService], (service: QtyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
