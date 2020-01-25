import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../shared/user.service";
import {User} from "../shared/classes";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  id: number;

  constructor(
    private activateRoute: ActivatedRoute,
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {

  }
}
