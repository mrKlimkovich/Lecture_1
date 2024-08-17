import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrl: './user-list-view.component.scss'
})
export class UserListViewComponent {
  @Input() userList: any;

  public onDeleteClick(userIndex: number): void{
    this.userList.splice(userIndex, 1);
  }
}
