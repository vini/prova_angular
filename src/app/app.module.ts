import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './routes/app-routes/app-routes.module';

import { UsersLayoutHeaderComponent } from './pages/users/users-layout/users-layout-header/users-layout-header.component';
import { UsersLayoutFooterComponent } from './pages/users/users-layout/users-layout-footer/users-layout-footer.component';

import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component';

import { CardComponent } from './pages/shared/components/cards/card/card.component';
import { CardDetailComponent } from './pages/shared/components/cards/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersLayoutHeaderComponent,
    UsersLayoutFooterComponent,
    UsersListComponent,
    UsersDetailComponent,
    CardComponent,
    CardDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
