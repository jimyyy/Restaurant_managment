

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';


@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addplatForm:FormGroup;
  plat:any={};
  imagePreview:any;
  
  plats:any;
  title:any;
  id:any;
  alert:boolean=false;

  constructor(private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private platservice:PlatService ) { }

  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get("id");
    if(this.id){
      //edit
      this.title="Edit";
      //this.plats=JSON.parse(localStorage.getItem("plats")||"[]");
      //for (let i = 0; i< this.plats.length; i++) {
        //if(this.plats[i].id==this.id){
          //this.plat=this.plats[i];
  
        //}
      
       
      //}
      //console.log("plat",this.plat);

      this.platservice.getplat(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.plat=data.plat;
        })

        
      
    }
    else{
      //add

      this.title="Add"
    }






















    this.addplatForm=this.formBuilder.group({
      platName : [''],
      price : [''],
      description : [''],
      img: ['']
    })

  }
  addoreditplat(){
    if(this.id){



      this.platservice.updateplat(this.plat).subscribe(
        (data)=>{
        console.log(data.message);
    });
      //edit

      //for (let i = 0; i < this.plats.length; i++) {
        //if(this.plats[i].id==this.id){
          //this.plats[i].platName=this.plat.platName;
          //this.plats[i].description=this.plat.description;
          //this.plats[i].price=this.plat.price;
        //} 
        
      //}

      //localStorage.setItem("plats",JSON.stringify(this.plats));
    }
    else{
    //let plats=JSON.parse(localStorage.getItem("plats") || "[]");
    //let idplat=JSON.parse(localStorage.getItem("idplat") ||"1");
    //let connecterUser=JSON.parse(localStorage.getItem("connecterUser"));


    //this.plat.id=idplat;
    
    //this.plat.idchef =connecterUser.id;

    //plats.push(this.plat);



    //localStorage.setItem("plats",JSON.stringify(plats));
    //localStorage.setItem("idplat",idplat + 1);
    let connecterUser=JSON.parse(localStorage.getItem("connecterUser"));
    this.plat.idchef =connecterUser._id;
    this.alert=true;
    this.addplatForm.reset({});
    

    this.platservice.addplat(this.plat,this.addplatForm.value.img).subscribe(
      (data)=>{
      console.log(data.message );
    });



    }







    


  }



  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.addplatForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.addplatForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de
    
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier
    
    reader.onload = () => {
    //affecter le résultat de la lecture dans la variable
    
    this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }

}
