import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchResultsComponent } from '../search-results/search.results.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) { }

  search() {
    const apiEndpoint = 'api/search';
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

  public navigateToUrl() {
    this.router.navigate(['/login']);
  }

}