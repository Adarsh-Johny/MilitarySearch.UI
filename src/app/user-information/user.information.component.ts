import { CommonModule } from '@angular/common';
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
  constructor() {
    this.data = [
      {
        "firstName": "John",
        "lastName": "Doe",
        "userName": "john.doe",
        "email": "john.doe@example.com",
        "status": "Active"
      },
      {
        "firstName": "Jane",
        "lastName": "Smith",
        "userName": "jane.smith",
        "email": "jane.smith@example.com",
        "status": "Inactive"
      },
      {
        "firstName": "Robert",
        "lastName": "Johnson",
        "userName": "robert.johnson",
        "email": "robert.johnson@example.com",
        "status": "Active"
      },
      {
        "firstName": "Alice",
        "lastName": "Williams",
        "userName": "alice.williams",
        "email": "alice.williams@example.com",
        "status": "Inactive"
      },
      {
        "firstName": "Michael",
        "lastName": "Brown",
        "userName": "michael.brown",
        "email": "michael.brown@example.com",
        "status": "Active"
      },
      {
        "firstName": "Emma",
        "lastName": "Davis",
        "userName": "emma.davis",
        "email": "emma.davis@example.com",
        "status": "Active"
      },
      {
        "firstName": "William",
        "lastName": "Miller",
        "userName": "william.miller",
        "email": "william.miller@example.com",
        "status": "Inactive"
      },
      {
        "firstName": "Olivia",
        "lastName": "Wilson",
        "userName": "olivia.wilson",
        "email": "olivia.wilson@example.com",
        "status": "Active"
      },
      {
        "firstName": "James",
        "lastName": "Moore",
        "userName": "james.moore",
        "email": "james.moore@example.com",
        "status": "Inactive"
      },
      {
        "firstName": "Sophia",
        "lastName": "Taylor",
        "userName": "sophia.taylor",
        "email": "sophia.taylor@example.com",
        "status": "Active"
      }
    ]

  }
}


class User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  status: string;

  constructor(firstName: string, lastName: string, userName: string, email: string, status: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.status = status;
  }
}
