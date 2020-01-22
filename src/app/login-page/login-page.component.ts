import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgModel, Validators} from "@angular/forms";

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/classes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  alerts: string[] = [];
  authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    });
  }

  submit() {
    this.alerts = [];
    const user: User = this.authForm.value;
    this.authService.login(user).subscribe(auth => {
      if (auth.token) {
        this.authService.setAuth(auth);
        this.router.navigate(['/profile']);
      } else {
        this.alerts.push('Ошибка отправки данных на сервер.');
      }
    }, (error: string) => this.alerts.push(error));
  }

  closeAlert(alert: string) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
