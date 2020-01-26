import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {CollaboratorsPageComponent} from "./collaborators-page/collaborators-page.component";
import {AuthGuard} from "./shared/auth.guard";
import {ManagementComponent} from "./management/management.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'user/:id', component: UserPageComponent, canActivate: [AuthGuard]},
      {path: 'collaborators', component: CollaboratorsPageComponent, canActivate: [AuthGuard]},
      {path: 'management', component: ManagementComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
