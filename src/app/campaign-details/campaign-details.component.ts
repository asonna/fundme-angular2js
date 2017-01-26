import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../campaign.model';
import { Router } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css'],
  providers: [CampaignService]
})
export class CampaignDetailsComponent implements OnInit {
  campaignId: string = null;
  campaignToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = urlParameters['id'];
    });
    this.campaignToDisplay = this.campaignService.getCampaignById(this.campaignId);
  }

}
