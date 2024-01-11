import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AuthService } from '../auth.service';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzInputModule, NzMessageModule,
    NzButtonModule, NzDividerModule, NzGridModule]
})
export class LoginComponent {
  validateForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private message: NzMessageService,
    private authService: AuthService, private fb: FormBuilder) {

    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

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
        next: this.handleSuccessResponse.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleSuccessResponse(response: any) {
    this.authService.setAuthentication(true);
    this.router.navigate(['/home']);
  }

  handleError(error: any) {
    this.message.error('Incorrect username or password. Please check');
  }
}
