import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: any;
  @Input() userIndex: number = -1;

  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  public onActivatedClick(): void{
    console.log("onActivatedClick");
    this.user.activated = !this.user.activated;
  }

  public onDeleteClick(): void{
    console.log("onDeleteClick");
    this.deleteClick.emit(this.userIndex);
  }
}
