import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchResultsComponent } from '../search-results/search.results.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: 'search.component.html',
  imports: [CommonModule, NzListModule, NzInputModule, NzButtonModule,
    FormsModule, SearchResultsComponent, HttpClientModule],
  styleUrls: ['search.component.less']
})
export class SearchComponent {
  searchResults: any[] = [];
  searchText: string = "who is the commander of us army";
  constructor(private http: HttpClient) { }

  search() {
    //TODO: Will be replaced in future
    const apiEndpoint = 'http://127.0.0.1:5000/api/search';
    const request = {
      searchText: this.searchText,
      country: "Us army",
      isAuthorized: false
    }

    this.http.post(apiEndpoint, request)
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleUpdateResponse(response: any) {
    this.searchResults = response;
  }

  handleError(error: any) {
    console.error('Error fetching data from the API', error);
  }
}


//   search() {
//     this.searchResults = [
//       {
//         avatar: 'https://example.com/avatar.jpg',
//         href: 'https://example.com/link1',
//         title: 'Result 1',
//         description: 'Description for Result 1',
//         content: 'Additional content for Result 1'
//       },
//       {
//         avatar: 'https://example.com/avatar.jpg',
//         href: 'https://example.com/link2',
//         title: 'Result 2',
//         description: 'Description for Result 2',
//         content: 'Additional content for Result 2'
//       },
//       {
//         avatar: 'https://example.com/avatar.jpg',
//         href: 'https://example.com/link3',
//         title: 'Result 3',
//         description: 'Description for Result 3',
//         content: 'Additional content for Result 3'
//       },
//     ];
//   }