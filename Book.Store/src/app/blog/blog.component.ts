import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

   id :number =0;
   authername :string ='deepak'   
   
   constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id= param['id'];
      this.authername=param['authername'];
    })
    
  }

}
