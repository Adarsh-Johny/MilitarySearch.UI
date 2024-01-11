import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MilitaryCampsComponent } from '../military-camps/military.camps.component';
import { UserInformationComponent } from '../user-information/user.information.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-military-information',
  templateUrl: 'military.information.component.html',
  styleUrls: ['military.information.component.less'],
  standalone: true,
  imports: [
    NzTabsModule, NzTableModule, MilitaryCampsComponent,
    UserInformationComponent
  ]
})
export class MilitaryInformationComponent {
  constructor(private router: Router, private authService: AuthService,) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
