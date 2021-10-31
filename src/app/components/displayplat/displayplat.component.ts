import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-displayplat',
  templateUrl: './displayplat.component.html',
  styleUrls: ['./displayplat.component.css']
})
export class DisplayplatComponent implements OnInit {
  id:any;
  plats:any;
  plat:any;

  constructor(private activatedRoute:ActivatedRoute,private platservice:PlatService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    //this.plats=JSON.parse(localStorage.getItem("plats"||"[]"));
    //for (let i = 0; i< this.plats.length; i++) {
      //if(this.plats[i].id==this.id){
        //this.plat=this.plats[i];

      //}
    
     
    //}

    //console.log("id",this.id);
    //console.log("plat",this.plat);

    this.platservice.getplat(this.id).subscribe(
      (data)=>{
        console.log(data.plat);
        this.plat=data.plat;

      }
    )
  }
}


