import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from 'src/app/pages/users/users-list/users-list.component';
import { UsersDetailComponent } from 'src/app/pages/users/users-detail/users-detail.component';

const appRoutes: Routes = [
  
  { path: '', component: UsersListComponent },
  { path: ':id', component: UsersDetailComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)  
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule { }
