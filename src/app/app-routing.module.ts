import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: SignupComponent,
    path: 'user_signup'
  },
  {
    component: LoginComponent,
    path: 'user_login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
