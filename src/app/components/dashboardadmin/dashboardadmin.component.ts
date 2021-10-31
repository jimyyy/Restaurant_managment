import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {
  users:any;
  clients:any=[];
  admins:any=[];
  chefs:any=[];
  

  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {

    //this.users=JSON.parse(localStorage.getItem("users" ||"[]"));
    //for (let i = 0; i < this.users.length; i++) {
      //if(this.users[i].role=="admin"){
        //this.admins.push(this.users[i]);
      //}
      //else if(this.users[i].role=="cheff"){
        //this.chefs.push(this.users[i]);


      //}
      //else{
        //this.clients.push(this.users[i]);
      //}
      
    //}
    //console.log("admins",this.admins) ;
    //console.log("clients",this.clients) ;
    //console.log("chefs",this.chefs) ;
    this.userservice.getusers().subscribe(
      (data)=>{
      console.log(data.users);
      this.users = data.users;
      //for (let i = 0; i < this.users.length; i++) {
      //if(this.users[i].role=="admin"){
        //this.admins.push(this.users[i]);
      //}
      //else if(this.users[i].role=="cheff"){
        //this.chefs.push(this.users[i]);


      //}
      //else{
        //this.clients.push(this.users[i]);
      //}
      
    //}
    })

  }


  displayUser(id:any){
    this.router.navigate([`displayUser/${id}`]);

  }
  deleteUser(id:any){
    //let pos;
    //for (let i = 0; i < this.users.length; i++) {
      //if (this.users[i].id==id) {
        //pos=i;
        
      //}
      
    //}
    //this.users.splice(pos,1);

    //localStorage.setItem("users",JSON.stringify(this.users));
    this.userservice.deleteuser(id).subscribe(
      (data)=>{
      console.log(data.message );
      this.userservice.getusers().subscribe(
        (data)=>{
        console.log(data.users);
        this.users = data.users;

    })
   
      //for (let i = 0; i < this.users.length; i++) {
      //if(this.users[i].role=="admin"){
        //this.admins.push(this.users[i]);
      //}
      //else if(this.users[i].role=="cheff"){
        //this.chefs.push(this.users[i]);


      //}
      //else{
        //this.clients.push(this.users[i]);
      //}
      
    //}
    })
  }

  editUser(id:any){
    this.router.navigate([`editAdmin/${id}`]);

  }
  //deletechef(id:any){
    //let pos;
    //for (let i = 0; i < this.users.length; i++) {
      //if (this.users[i].id==id) {
        //pos=i;
        
      //}
      
    //}
    //this.users.splice(pos,1);

    //localStorage.setItem("users",JSON.stringify(this.users));
  //}
  editchef(id:any){
    this.router.navigate([`editChef/${id}`]);

  }
  //deleteclient(id:any){
    //let pos;
    //for (let i = 0; i < this.users.length; i++) {
      //if (this.users[i].id==id) {
        //pos=i;
        
      //}
      
    //}
    //this.users.splice(pos,1);

    //localStorage.setItem("users",JSON.stringify(this.users));

  //}
  editclient(id:any){
    this.router.navigate([`editclient/${id}`]);


  }

  downloadpdf(){
    this.userservice.getPdf().subscribe(
      (data)=>{
      console.log(data.message);
      }
      )
      

  }


 

}
