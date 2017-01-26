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
  header: string =" ";


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
      }else if(url == "/campaign")
      this.header = "All Campaign";
    }

  ngOnInit() {
   this.showHeading (this.currentRoute);

    this.campaigns = this.campaignService.getCampaigns();
  }

  goToDetailPage(clickedCampaign) {
   this.router.navigate(['campaigns', clickedCampaign.$key]);
   console.log(clickedCampaign);
 };

}
