import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-dashboardchef',
  templateUrl: './dashboardchef.component.html',
  styleUrls: ['./dashboardchef.component.css']
})
export class DashboardchefComponent implements OnInit {
  
  plat:any=[];
  plats:any;
  myplats:any=[];
  connecterUser
  constructor(private router:Router, private platservice:PlatService) { }

  ngOnInit(): void {
    //this.plats=JSON.parse(localStorage.getItem("plats" ||"[]"));
     this.connecterUser=JSON.parse(localStorage.getItem("connecterUser"));

    //for (let i = 0; i < this.plats.length; i++) {
      //if(this.plats[i].idchef==connecterUser.id){
        //this.plat.push(this.plats[i]);
      //}
      
    //}
    //console.log("plat",this.plat);
    this.platservice.getplats().subscribe(
      (data)=>{
      console.log(data.plats);
      this.plats = data.plats;
      

      for (let i = 0; i < this.plats.length; i++) {
        if (this.plats[i].idchef == this.connecterUser._id) {
          this.myplats.push(this.plats[i]);
        }
        
      }
      
        
      }
    )
    console.log("plat",this.plats)

   
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
     
     

      
    
    //console.log("plat",this.plats);



  }
  displayplat(id:any){
    this.router.navigate([`displayplat/${id}`]);
  }
  deleteplat(id:any){
    //let pos;
    //for (let i = 0; i < this.plats.length; i++) {
      //if (this.plats[i].id==id) {
        //pos=i;
        
      //}
      
    //}
    //this.plats.splice(pos,1);

    //localStorage.setItem("plats",JSON.stringify(this.plats));

    this.platservice.deleteplat(id).subscribe(
      (data)=>{
      console.log(data.message );
    })
  }
  editplat(id:any){
    this.router.navigate([`editplat/${id}`]);
  }  
  
  addplat(){
    this.router.navigate(["addPlat"]);
  }

}
