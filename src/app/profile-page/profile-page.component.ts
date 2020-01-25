import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../shared/classes";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: []
})
export class ProfilePageComponent implements OnInit {
  friends: User[] = [];

  id: number;
  isAuth: boolean = false;
  alert: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      // const token = this.authService.getToken();
      this.id = 4;
      this.isAuth = true;

      this.userService.getAllUsers().subscribe(page => {
        const friends = page.data.splice(0, 3);
        this.friends = friends;
      });

    } else {
      this.alert = 'Вы не авторизованы.';
      this.isAuth = false;
    }
  }

  close() {
    this.alert = '';
  }

  goToPage($event, id: number) {
    $event.preventDefault();
    this.router.navigate(['user', id.toString()]);
  }
}
