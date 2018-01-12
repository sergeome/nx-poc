import { Component, OnInit } from '@angular/core';
import { LocationDetectionModule } from '@nx-poc/location-detection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public location: string;

  constructor(private locationService: LocationDetectionModule) {}

  ngOnInit() {
    this.location = this.locationService.getLocation();
  }
}
