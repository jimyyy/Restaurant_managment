import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addForm:FormGroup;
  
  users:any;
  title:any;
  id:any;
  user:any={};

  constructor(private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("id");

    console.log("id",this.id);

    if(this.id){
      //edit
      this.title="Edit";
      //this.users=JSON.parse(localStorage.getItem("users")||"[]");
      //for (let i = 0; i< this.users.length; i++) {
        //if(this.users[i].id==this.id){
          //this.user=this.users[i];
  
        //}
      
       
      //}
      //console.log("user",this.user);

      this.userservice.getuser(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.user=data.user;
        })



        
      
    }
    else{
      //add

      this.title="Add"
    }
























    this.addForm=this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      tel : [''],
      password : [''],
      confirmPassword : ['']


    })

    
  }

  addoredit(){


    if(this.id){

      this.userservice.updateuser(this.user).subscribe(
        (data)=>{
        console.log(data.message);
    });



      //edit

      //for (let i = 0; i < this.users.length; i++) {
        //if(this.users[i].id==this.id){
          //this.users[i].firstName=this.user.firstName;
          //this.users[i].lastName=this.user.lasttName;
          //this.users[i].email=this.user.email;
          //this.users[i].password=this.user.password;
          //this.users[i].confirmPassword=this.user.confirmPassword;
          //this.users[i].tel=this.user.tel;
        //}
        
      //}

      //localStorage.setItem("users",JSON.stringify(this.users));
    }
    else{
      //console.log("admin",this.user);
    //let users=JSON.parse(localStorage.getItem("users") || "[]");
    //let idUser=JSON.parse(localStorage.getItem("idUser") ||"1");
    
    //this.user.id=idUser;
    //this.user.role="admin";


    //users.push(this.user);

    //localStorage.setItem("users",JSON.stringify(users));
    //localStorage.setItem("idUser",idUser + 1);
    this.user.role="admin";

    this.userservice.createuser(this.user).subscribe(
      (data)=>{
      console.log(data.message );
    });



    }











    
  }

}






