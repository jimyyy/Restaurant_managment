import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connecterUser:any;
  connected:any=false;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.connecterUser=JSON.parse(localStorage.getItem("connecterUser"));

    if(this.connecterUser){
      this.connected=true;
    }
  }
  logout(){
    localStorage.removeItem("connecterUser");
    this.router.navigate(['']);
  }

}
