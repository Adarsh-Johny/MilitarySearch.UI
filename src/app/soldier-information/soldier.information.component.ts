import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-soldier-information',
  templateUrl: 'soldier.information.component.html',
  styleUrls: ['soldier.information.component.less'],
  standalone: true,
  imports: [NzTableModule, CommonModule]
})
export class SoldierInformationComponent {
  data: Array<Soldier> = [];

  constructor() {
    this.data = [
      {
        "firstName": "John",
        "lastName": "Doe",
        "gender": "Male",
        "rank": "Sergeant",
        "unit": "Alpha Company"
      },
      {
        "firstName": "Jane",
        "lastName": "Smith",
        "gender": "Female",
        "rank": "Captain",
        "unit": "Bravo Company"
      },
      {
        "firstName": "Robert",
        "lastName": "Johnson",
        "gender": "Male",
        "rank": "Private",
        "unit": "Charlie Company"
      },
      {
        "firstName": "Alice",
        "lastName": "Williams",
        "gender": "Female",
        "rank": "Major",
        "unit": "Delta Company"
      },
      {
        "firstName": "Michael",
        "lastName": "Brown",
        "gender": "Male",
        "rank": "Lieutenant",
        "unit": "Echo Company"
      },
      {
        "firstName": "Emma",
        "lastName": "Davis",
        "gender": "Female",
        "rank": "Sergeant",
        "unit": "Foxtrot Company"
      },
      {
        "firstName": "William",
        "lastName": "Miller",
        "gender": "Male",
        "rank": "Colonel",
        "unit": "Golf Company"
      },
      {
        "firstName": "Olivia",
        "lastName": "Wilson",
        "gender": "Female",
        "rank": "Private",
        "unit": "Hotel Company"
      },
      {
        "firstName": "James",
        "lastName": "Moore",
        "gender": "Male",
        "rank": "General",
        "unit": "India Company"
      },
      {
        "firstName": "Sophia",
        "lastName": "Taylor",
        "gender": "Female",
        "rank": "Lieutenant",
        "unit": "Juliet Company"
      },
      {
        "firstName": "Daniel",
        "lastName": "Anderson",
        "gender": "Male",
        "rank": "Sergeant",
        "unit": "Kilo Company"
      },
      {
        "firstName": "Isabella",
        "lastName": "Clark",
        "gender": "Female",
        "rank": "Major",
        "unit": "Lima Company"
      },
      {
        "firstName": "Joseph",
        "lastName": "White",
        "gender": "Male",
        "rank": "Private",
        "unit": "Mike Company"
      },
      {
        "firstName": "Mia",
        "lastName": "Hall",
        "gender": "Female",
        "rank": "Captain",
        "unit": "November Company"
      },
      {
        "firstName": "David",
        "lastName": "Adams",
        "gender": "Male",
        "rank": "Sergeant",
        "unit": "Oscar Company"
      }
    ]


  }
}

class Soldier {
  firstName: string;
  lastName: string;
  gender: string;
  rank: string;
  unit: string;

  constructor(firstName: string, lastName: string, gender: string, rank: string, unit: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.rank = rank;
    this.unit = unit;
  }
}