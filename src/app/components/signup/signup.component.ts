import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:any;
  source:any;
  signupform:FormGroup;
  alert:boolean=false;
  

  constructor(private formBuilder:FormBuilder, private userservice:UserService) { }

  ngOnInit() {
    this.title="Signup";
    this.source="src/assets/img/blog/author.png";
    this.signupform=this.formBuilder.group({
      firstName :['',[Validators.required,Validators.minLength(3)]],
      lastName :['',[Validators.required,Validators.minLength(5)]],
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required]],
      tel : ['',[Validators.required,Validators.minLength(8)]]

    },
    {
      validator :MustMatch('password','confirmPassword')
    });
  }
  signup(c:any){
    //console.log("mu user",c);
    //let users =JSON.parse(localStorage.getItem("users") ||"[]");
    //let idUser=JSON.parse(localStorage.getItem("idUser") ||"1");
    //c.id=idUser;
    //c.role="user";

    //users.push(c);


    //localStorage.setItem("users",JSON.stringify(users));

    //localStorage.setItem("idUser",idUser + 1);


    c.role="client";
    this.alert=true;
    this.signupform.reset({});

    this.userservice.createuser(c).subscribe(
      (data)=>{
      console.log(data.message );
    });


  }

}
