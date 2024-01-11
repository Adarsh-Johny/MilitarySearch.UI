import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { fadeInOutAnimation } from './search.results.animation';
import { DelayRenderModule } from '../utilities/utilities.module';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, NzListModule, NzInputModule, NzButtonModule, NzResultModule, DelayRenderModule],
  templateUrl: 'search.results.component.html',
  styleUrls: ['search.results.component.less'],
  animations: [fadeInOutAnimation]

})
export class SearchResultsComponent {
  @Input() searchResults: any = {};

  trackByFn(index: number): number {
    return index;
  }

  extractValue(json: any): string | undefined {
    if (json && typeof json === 'object') {
      if ('value' in json) {
        return json['value'];
      }

      for (const key in json) {
        if (json.hasOwnProperty(key)) {
          const innerValue = this.extractValue(json[key]);
          if (innerValue !== undefined) {
            return innerValue;
          }
        }
      }
    }

    return undefined;
  }
}
