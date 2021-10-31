import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {
  id:any;
  users:any;
  user:any={};

  constructor(private activatedRoute:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    //this.users=JSON.parse(localStorage.getItem("users"||"[]"));
    //for (let i = 0; i< this.users.length; i++) {
      //if(this.users[i].id==this.id){
        //this.user=this.users[i];

      //}
    
     
    //}

    //console.log("id",this.id);
    //console.log("user",this.user);

    this.userservice.getuser(this.id).subscribe(
      (data)=>{
        console.log(data.user);
        this.user=data.user;
      }
    )
      
  }
  

}
