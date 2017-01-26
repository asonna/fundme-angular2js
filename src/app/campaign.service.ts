import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CampaignService {
  campaigns: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.campaigns = angularFire.database.list('campaigns');
  }

  getCampaigns() {
    return this.campaigns;
  }

  getCampaignByType(campaignType: string) {
    if (campaignType === "Business") {
      return this.campaigns;
    }
    // return this.angularFire.database.list('campaigns/id/' + campaignType);
  // console.log(this.angularFire.database.list('campaigns'));
  }
}
