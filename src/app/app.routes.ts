import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AllArmyComponent } from './all-army/all.army.component';
import { MilitaryInformationComponent } from './military-information/military.information.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'list', component: AllArmyComponent },
    { path: 'home', component: MilitaryInformationComponent, canActivate: [AuthGuard] },
];
