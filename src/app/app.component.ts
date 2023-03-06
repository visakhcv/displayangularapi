import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testproject';
  allcontact:any = []
  searchkey:string =""
  constructor (private api:ApiService){}

  ngOnInit(): void {
    this.getallcontact()
  }
  searchKey:string=''
  getallcontact(){
    this.api.allContacts()
    .subscribe((result:any)=>{
      console.log(result);
      this.allcontact=result['users']
    })
  }
}
