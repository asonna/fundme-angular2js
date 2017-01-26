import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../campaign.model';
import { Router } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
  providers: [CampaignService]
})
export class CampaignComponent implements OnInit {
  campaigns: FirebaseListObservable<any[]>;
  campaignType: string = "Medical";
  currentRoute: string = this.router.url;
  header: string ="test";


  campaignToDisplay

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private campaignService: CampaignService) { }

    showHeading (url){
      if (url == "/Medical"){
        this.header= "Medical Campaign";
      }else if(url == "/Business"){
        this.header= "Business Campaign";
      }
    }

  ngOnInit() {
   this.showHeading (this.currentRoute);

    this.campaigns = this.campaignService.getCampaignByType("Business");
    // this.campaigns = this.campaignService.getCampaignByType("Medical");
    // this.route.params.forEach((urlParameters) => {
    //   this.campaignType = urlParameters['id/campaignType'];
    // });
    // this.campaignToDisplay = this.campaignService.getCampaignByType(this.campaignType);
    // console.log(this.campaignService.getCampaignByType("Medical"));

  }

}
