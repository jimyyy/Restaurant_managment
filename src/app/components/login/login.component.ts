import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  user:any={};
  findedUser:any;

  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
     
      email :[''],
      password:['']


    })
  
  } 
  //login(){
    //console.log("my user",this.user);
    //let users=JSON.parse(localStorage.getItem('users' || "[]"));

    //for (let i =0;i<users.length;i++) {
      //if(users[i].email==this.user.email && users[i].password==this.user.password){
        //this.findedUser=users[i]
        //localStorage.setItem("connecterUser",JSON.stringify(this.findedUser));
      //}
      
    
    //}

    //console.log("findeduser",this.findedUser);

    //if(this.findedUser){
     
    //}


    
  //}
  login(){

    this.userservice.login(this.user).subscribe(
      (data)=>{
        console.log(data.findedUser)

        this.findedUser= data.findedUser
        localStorage.setItem("connecterUser",JSON.stringify(this.findedUser));
        switch (this.findedUser.role) {
          case "client":
            this.router.navigate(['']);
            
            break;
            case "admin":
              this.router.navigate(['interfaceadmin']);
            break;
            case "cheff":
              this.router.navigate(['dashboardChef']);
            break;
  
        
          default:
            break;
        }
      }
    )

  }


}
