import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CollaboratorsPageComponent } from './collaborators-page/collaborators-page.component';
import { SingleComponent } from './single/single.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { CollaboratorComponent } from './collaborators-page/collaborator/collaborator.component';


import {AuthService} from "./shared/auth.service";
import {UserService} from "./shared/user.service";
import {AuthGuard} from "./shared/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    HomePageComponent,
    ProfilePageComponent,
    SingleComponent,
    UserPageComponent,
    CollaboratorsPageComponent,
    CollaboratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
