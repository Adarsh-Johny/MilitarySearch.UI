import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { fadeInOutAnimation } from './search.results.animation';
import { DelayRenderModule } from '../utilities/utilities.module';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, NzListModule, NzInputModule, NzButtonModule, DelayRenderModule],
  templateUrl: 'search.results.component.html',
  styleUrls: ['search.results.component.css'],
  animations: [fadeInOutAnimation]

})
export class SearchResultsComponent {
  @Input() searchResults: any[] = [];

  trackByFn(index: number): number {
    return index;
  }

  constructor() {
  }
}
