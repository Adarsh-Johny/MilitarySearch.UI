import { Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-military-camps',
  templateUrl: 'military.camps.component.html',
  styleUrls: ['military.camps.component.less'],
  standalone: true,
  imports: [NzTableModule, CommonModule]
})
export class MilitaryCampsComponent {
  @Input() set eventChange(value: boolean) {
    this.getData();
  }
  data: Array<MilitaryCamp> = [];

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    const apiEndpoint = 'http://127.0.0.1:5000/api/military-camps';

    this.http.get(apiEndpoint)
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleUpdateResponse(response: any) {
    this.data = response;
  }

  handleError(error: any) {
    console.error('Error fetching data from the API', error);
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
