import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  users:any;
  chefs:any=[];

  constructor() { }

  ngOnInit(): void {
    this.users=JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].role=="cheff"){
        this.chefs.push(this.users[i]);
      }
      
    }
  }

  update(e){
    this.users=e;

  }

}
