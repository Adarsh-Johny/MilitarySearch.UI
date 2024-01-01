import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchResultsComponent } from '../search-results/search.results.component';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: 'search.component.html',
  imports: [CommonModule, NzListModule, NzInputModule, NzButtonModule, SearchResultsComponent],
  styleUrls: ['search.component.less']
})
export class SearchComponent {
  searchResults: any[] = [];

  search() {
    this.searchResults = [
      {
        avatar: 'https://example.com/avatar.jpg',
        href: 'https://example.com/link1',
        title: 'Result 1',
        description: 'Description for Result 1',
        content: 'Additional content for Result 1'
      },
      {
        avatar: 'https://example.com/avatar.jpg',
        href: 'https://example.com/link2',
        title: 'Result 2',
        description: 'Description for Result 2',
        content: 'Additional content for Result 2'
      },
      {
        avatar: 'https://example.com/avatar.jpg',
        href: 'https://example.com/link3',
        title: 'Result 3',
        description: 'Description for Result 3',
        content: 'Additional content for Result 3'
      },
    ];
  }
}
