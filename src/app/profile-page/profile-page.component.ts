import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Auth} from "../shared/interfaces";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: []
})
export class ProfilePageComponent implements OnInit {
  id: number;
  isAuth: boolean = false;
  alert: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      const auth: Auth = this.authService.getUserData();
      this.id = auth.id;
      this.isAuth = true;
    } else {
      this.alert = 'Вы не авторизованы.';
      this.isAuth = false;
    }
  }

  close() {
    this.alert = '';
  }
}
