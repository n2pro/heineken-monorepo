/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeinekenQtyServiceService } from './heineken-qty-service.service';

describe('Service: HeinekenQtyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeinekenQtyServiceService]
    });
  });

  it('should ...', inject([HeinekenQtyServiceService], (service: HeinekenQtyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
