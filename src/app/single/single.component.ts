import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../shared/user.service";
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/interfaces";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  providers: [UserService]
})
export class SingleComponent implements OnInit {
  @Input('account-id') id: number;
  user: User;
  loading: boolean = false;

  constructor(
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id: number) {
    this.loading = true;
    if (id) {
      this.userService.getUser(id).subscribe(user => {
        this.loading = false;
        this.user = user;
      });
    }
  }

}
