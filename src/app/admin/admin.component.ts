import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { CampaignService } from '../campaign.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CampaignService]
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {

  }
  submitForm(campaignType: string, title: string, name: string, description: string, amount: number, picture: string) {
   var newCampaign: Campaign = new Campaign(campaignType, title, name, description, amount, picture);
    this.campaignService.addCampaign(newCampaign);
    this.router.navigate(['campaign']);
  }
}
