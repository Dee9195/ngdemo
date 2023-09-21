import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { ContactformComponent } from './contactform/contactform.component';

const routes: Routes = [
  {path:'',redirectTo:'auth/login',pathMatch:'full'},
  {path:'blog/:id/authore/:authername',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'contactform',component:ContactformComponent},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
