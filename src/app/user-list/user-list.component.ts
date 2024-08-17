import { Component } from '@angular/core';

enum _gender {
  m = "male",
  f = "female"
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  public userList1 = [
    { firstName: 'Ivan', lastName: 'Ivanov', age: 18, gender: _gender.m, activated: true },
    { firstName: 'Petrova', lastName: 'Tatiana', age: 25, gender: _gender.f, activated: false },
    { firstName: 'Semen', lastName: 'Semenov', age: 63, gender: _gender.m, activated: false },
    { firstName: 'Valentina', lastName: 'Valentinova', age: 33, gender: _gender.f, activated: true }
  ]

  public onActivateClick(): void{

  }
}
