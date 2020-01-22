import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'user/:id', component: UserPageComponent},
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
