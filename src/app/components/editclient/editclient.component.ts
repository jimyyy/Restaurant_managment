import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  editForm:FormGroup;
  users:any;
  user:any={};
  id:any

  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");

    //this.users=JSON.parse(localStorage.getItem("users")||"[]");
      //for (let i = 0; i< this.users.length; i++) {
        //if(this.users[i].role=="user"){
          //this.user=this.users[i];
  
        //}
      
       
      //}


      this.userservice.getuser(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.user=data.user;
        })
      this.editForm=this.formBuilder.group({
        firstName : [''],
        lastName : [''],
        email : [''],
        tel : [''],
        password : [''],
        confirmPassword : ['']
  
  
      })
  
  }
  edit(){

    //for (let i = 0; i < this.users.length; i++) {
      //if(this.users[i].role=="user"){
        //this.users[i].firstName=this.user.firstName;
        //this.users[i].lastName=this.user.lasttName;
        //this.users[i].email=this.user.email;
        //this.users[i].password=this.user.password;
        //this.users[i].confirmPassword=this.user.confirmPassword;
        //this.users[i].tel=this.user.tel;
      //}
      
    //}

    //localStorage.setItem("users",JSON.stringify(this.users));


    this.userservice.updateuser(this.user).subscribe(
      (data)=>{
      console.log(data.message);
  });


  }

}
