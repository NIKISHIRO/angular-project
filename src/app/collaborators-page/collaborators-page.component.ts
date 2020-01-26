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

  formEditModal;
  formDeleteModal;
  formAddModal;

  alert: string = '';

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(page => {
      this.users = page.data;
    });
  }

  onEditClick(user: User, template) {
    this.currentUser = {...user};
    this.formEditModal = this.modalService.open(template);
  }

  onDeleteClick(user: User, template) {
    this.currentUser = {...user};
    this.formDeleteModal = this.modalService.open(template);
  }

  save() {
    this.userService.updateUser(this.currentUser)
      .subscribe(data => {
        console.log('data', data);
        this.alert = 'Данные пользователя успешно измененны!';
        setTimeout(() => this.alert = '', 5000);
      });
  }

  modalEditClose() {
    this.formEditModal.close();
  }

  modalDeleteClose() {
    this.formDeleteModal.close();
  }

  modalDeleteConfirm() {
    this.formDeleteModal.close();

    const idx = this.users.findIndex((u) => u.id === this.currentUser.id);
    this.users.splice(idx, 1);

    this.userService.deleteUserById(this.currentUser.id).subscribe(data => {
      console.log(data);
      this.alert = 'Пользователь успешно удален!';
      setTimeout(() => this.alert = '', 5000);
    });
  }

  addUser(template) {
    this.formAddModal = this.modalService.open(template);
  }

  modalAddClose() {
    this.formAddModal.close();
  }
}
