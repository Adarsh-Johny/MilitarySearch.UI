
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-all-army',
  templateUrl: 'all.army.component.html',
  styleUrls: ['all.army.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzInputModule, NzIconModule, NzListModule, ScrollingModule, CdkVirtualScrollViewport,
    FormsModule, CommonModule, NzDividerModule, NzDrawerModule]

})
export class AllArmyComponent implements OnInit, OnDestroy {
  searchKeyword: string = "";
  ds = new MyDataSource(this.http);
  isSliderOpen = false;
  iframeSrc: SafeResourceUrl = '';
  private destroy$ = new Subject<boolean>();
  private searchSubject = new Subject<string>();

  dataSource: Observable<any[]>;

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) {
    this.dataSource = this.ds.connect();
  }

  openSlider(link: string): void {
    this.isSliderOpen = true;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  closeSlider(): void {
    this.isSliderOpen = false;
    this.iframeSrc = '';
  }

  handleIframeError(event: Event): void {
    console.error('Iframe error:', event);
  }

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((searchKeyword: string) => {
        this.ds.search(searchKeyword);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchKeyword);
  }

  navigateToUrl(url: string) {
    this.router.navigate([url]);
  }
}

class MyDataSource extends DataSource<any> {
  private cachedData: any[] = [];
  private displayedData: any[] = [];
  private dataStream = new BehaviorSubject<any[]>(this.displayedData);

  constructor(private http: HttpClient) {
    super();
  }

  connect(): Observable<any[]> {
    this.fetchData();
    return this.dataStream.asObservable();
  }

  disconnect(): void {
    // No special handling needed here
  }

  search(searchKeyword: string): void {
    this.displayedData = this.filterData(this.cachedData, searchKeyword);
    this.dataStream.next(this.displayedData);
  }

  private fetchData(): void {
    const storedData = localStorage.getItem('militaryForces');
    if (storedData) {
      this.cachedData = JSON.parse(storedData);
      this.displayedData = this.cachedData;
      this.dataStream.next(this.displayedData);
    } else {
      const apiUrl = 'http://127.0.0.1:5000/api/list';
      this.http
        .get<any[]>(apiUrl)
        .pipe(catchError(() => []))
        .subscribe(res => {
          this.cachedData = res;
          this.displayedData = this.cachedData;
          this.dataStream.next(this.displayedData);
          localStorage.setItem('militaryForces', JSON.stringify(res));
        });
    }
  }

  private filterData(data: any[], keyword: string): any[] {
    if (!data || !keyword) {
      return data;
    }

    keyword = keyword.toLowerCase();

    return data.filter((item) =>
      item.Country.toLowerCase().includes(keyword) ||
      item.Url.toLowerCase().includes(keyword)

    );
  }
}