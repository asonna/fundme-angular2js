/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignService]
    });
  });

  it('should ...', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
