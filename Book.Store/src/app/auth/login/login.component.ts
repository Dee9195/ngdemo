import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private route:ActivatedRoute){}
public name :string ='';
public email :string='';


 ngOnInit():void{
   this.route.queryParams.subscribe(queryParams =>
    { this.name= queryParams['name'];
      this.email=queryParams['email'];
  }
      
    )
 }
}
