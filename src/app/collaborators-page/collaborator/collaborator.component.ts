import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../shared/classes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
  @Input() user: User;

  @Output() editClick = new EventEmitter<User>();
  @Output() deleteClick = new EventEmitter<User>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditClick() {
    this.editClick.emit(this.user);
  }

  onDeleteClick() {
    this.deleteClick.emit(this.user);
  }

  goToPage($event, id: number) {
    $event.preventDefault();
    this.router.navigate(['user', id.toString()]);
  }
}
