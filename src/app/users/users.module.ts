import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
