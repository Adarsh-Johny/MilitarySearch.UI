import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-military-camps',
  templateUrl: 'military.camps.component.html',
  styleUrls: ['military.camps.component.less'],
  standalone: true,
  imports: [NzTableModule, CommonModule]
})
export class MilitaryCampsComponent {
  data: Array<MilitaryCamp> = [];

  constructor() {
    this.data = [
      {
        "location": "Camp Alpha",
        "latitude": "34.0522",
        "longitude": "-118.2437",
        "serviceBranch": "Army",
        "status": "Active"
      },
      {
        "location": "Base Bravo",
        "latitude": "40.7128",
        "longitude": "-74.0060",
        "serviceBranch": "Navy",
        "status": "Inactive"
      },
      {
        "location": "Fort Charlie",
        "latitude": "41.8781",
        "longitude": "-87.6298",
        "serviceBranch": "Air Force",
        "status": "Active"
      },
      {
        "location": "Camp Delta",
        "latitude": "29.7604",
        "longitude": "-95.3698",
        "serviceBranch": "Marines",
        "status": "Inactive"
      },
      {
        "location": "Base Echo",
        "latitude": "51.5074",
        "longitude": "-0.1278",
        "serviceBranch": "Coast Guard",
        "status": "Active"
      }
    ]

  }
}


class MilitaryCamp {
  location: string;
  latitude: string;
  longitude: string;
  serviceBranch: string;
  status: string;

  constructor(location: string, latitude: string, longitude: string, serviceBranch: string, status: string) {
    this.location = location;
    this.latitude = latitude;
    this.longitude = longitude;
    this.serviceBranch = serviceBranch;
    this.status = status;
  }
}
