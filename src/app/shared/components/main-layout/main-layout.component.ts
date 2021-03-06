import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  menuActive: boolean = true;
  date: Date = new Date();

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
