import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserListComponent } from './user-list/user-list.component';
import { UserListViewComponent } from './user-list/user-list-view/user-list-view.component';
import { UserCardComponent } from './user-list/user-list-view/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListViewComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
