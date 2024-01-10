import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzInputModule, NzButtonModule, NzDividerModule, NzGridModule]
})
export class LoginComponent {
  validateForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {

    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  authenticationInfo: any;

  navigateToUrl(url: string) {
    this.router.navigate([url]);
  }

  submitForm() {
    const apiEndpoint = 'http://127.0.0.1:5000/api/login';
    const request = {
      ...this.validateForm.value
    }

    this.http.post(apiEndpoint, request)
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleUpdateResponse(response: any) {
    this.authenticationInfo = response;
  }

  handleError(error: any) {
    console.error('Error fetching data from the API', error);
  }
}
