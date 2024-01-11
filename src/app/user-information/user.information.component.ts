import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-user-information',
  templateUrl: 'user.information.component.html',
  styleUrls: ['user.information.component.less'],
  standalone: true,
  imports: [NzTableModule, CommonModule]
})
export class UserInformationComponent {
  data: Array<User> = [];

  constructor(private http: HttpClient,) {
    this.getData();
  }

  getData() {
    const apiEndpoint = 'http://127.0.0.1:5000/api/users';

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

class User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  status: string;
  type: string

  constructor(firstName: string, lastName: string, userName: string, email: string, status: string, type: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.status = status;
    this.type = type;
  }
}
