import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/classes";
import {Router} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-collaborators-page',
  templateUrl: './collaborators-page.component.html',
  styleUrls: ['./collaborators-page.component.css']
})
export class CollaboratorsPageComponent implements OnInit {
  currentUser: User;
  users: User[];

  isSuccess: boolean = false;
  formModal;

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  onEditClick(user: User, template) {
    this.currentUser = {...user};
    this.formModal = this.modalService.open(template);
  }

  onDeleteClick(user: User) {
    console.log(user.id);
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(page => {
      this.users = page.data;
    });
  }

  deleteUserById(id: number) {
    this.userService.deleteUserById(id);
  }

  save(user: User) {
    this.userService.updateUser(user)
      .subscribe(data => {
        console.log('data', data);
        this.isSuccess = true;
        setTimeout(() => this.isSuccess = false, 5000);
      });
  }

  close() {
    this.formModal.close();
    this.isSuccess = false;
  }
}
