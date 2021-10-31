import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationform:FormGroup;
  user:any={};
  alert:boolean=false;


  constructor(private formBuilder:FormBuilder, private userservice:UserService) { }

  ngOnInit(): void {

    this.reservationform=this.formBuilder.group({
      firstName : [''],
      message : [''],
      email : [''],
      tel : [''],
      date : [''],
      persons : ['']
      


    })

  }


 

  reservation(){
    console.log(this.user)
    this.alert=true;
    this.reservationform.reset({});
    

    this.user.role="client";

    this.userservice.createreservation(this.user).subscribe(
      (data)=>{
      console.log(data.message );
    });

  }
  

}
