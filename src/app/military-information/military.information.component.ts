import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MilitaryCampsComponent } from '../military-camps/military.camps.component';
import { UserInformationComponent } from '../user-information/user.information.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-military-information',
  templateUrl: 'military.information.component.html',
  styleUrls: ['military.information.component.less'],
  standalone: true,
  imports: [
    NzTabsModule, NzTableModule, MilitaryCampsComponent, NzDrawerModule,
    UserInformationComponent, NzDividerModule, CommonModule
  ]
})
export class MilitaryInformationComponent {
  isSliderOpen: boolean = false;
  iframeSrc: SafeResourceUrl = '';
  eventChange = false;
  constructor(private router: Router, private authService: AuthService, private sanitizer: DomSanitizer) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  showDjangoModal() {
    this.isSliderOpen = true;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8000/admin");
  }

  closeSlider(): void {
    this.isSliderOpen = false;
    this.iframeSrc = '';
    this.eventChange = !this.eventChange;
  }

  handleIframeError(event: Event): void {
    console.error('Iframe error:', event);
  }
}
