import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  chefForm:FormGroup;
  user:any={};
  users:any;
  title:any;
  id:any;

  constructor(private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("id");
    if(this.id){
      //edit
      this.title="Edit";
      //this.users=JSON.parse(localStorage.getItem("users")||"[]");
      //for (let i = 0; i< this.users.length; i++) {
        //if(this.users[i].id==this.id){
          //this.cheff=this.users[i];
  
        //}
      
       
      //}
      //console.log("user",this.cheff);

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















    this.chefForm=this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      tel : [''],
      password : [''],
      speciality : [''],
      Experience : ['']

    }

    )


      
  }
  cheforedit(){
    if(this.id){



      this.userservice.updateuser(this.user).subscribe(
        (data)=>{
        console.log(data.message);
    });
      //edit

      //for (let i = 0; i < this.users.length; i++) {
        //if(this.users[i].id==this.id){
          //this.users[i].firstName=this.cheff.firstName;
          //this.users[i].lastName=this.cheff.lasttName;
          //this.users[i].email=this.cheff.email;
          //this.users[i].speciality=this.cheff.speciality;
          //this.users[i].Experience=this.cheff.Experience;
          //this.users[i].tel=this.cheff.tel;
        //}
        
      //}

      //localStorage.setItem("users",JSON.stringify(this.users));
    }
    else{
      //console.log("my chef",this.cheff);
    //let users=JSON.parse(localStorage.getItem("users") || "[]");
    //let idUser=JSON.parse(localStorage.getItem("idUser") ||"1");
    //let connecterUser=JSON.parse(localStorage.getItem("connecterUser"));
    
    
    

    

    //this.cheff.id=idUser;
    //this.cheff.role="cheff";
    //this.cheff.idAdmin =connecterUser.id;
    


    //users.push(this.cheff);

    //localStorage.setItem("users",JSON.stringify(users));
    //localStorage.setItem("idUser",idUser + 1);
    let connecterUser=JSON.parse(localStorage.getItem("connecterUser"));

    this.user.idAdmin=connecterUser._id;

     

     this.user.role="cheff";


    this.userservice.createchef(this.user).subscribe(
      (data)=>{
      console.log(data.message );
    });

    }









    
    


    
  }

  

}
