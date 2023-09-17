import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
{path:'auth',component:AuthComponent ,children:[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'changepasword',component:ChangepasswordComponent}
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
