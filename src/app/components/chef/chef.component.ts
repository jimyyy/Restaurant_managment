import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  @Input() childchef;
  @Output() newchefs : EventEmitter <any> =new EventEmitter();
  


  constructor() { }

  ngOnInit(): void {
  }

  getcolor(speciality){
    switch (speciality) {
      case "TN":
        return "red"
        break;

        case"IT":
        return "green"
    
      default:
        break;
    }
  }

  //delete(id){
    //let users=JSON.parse(localStorage.getItem("users") || "[]");
    //let pos;
    //for (let i = 0; i < users.length; i++) {
      //if(users[i].id==id){
        //pos=i;
      //}
      
    //}
    //users.splice(pos,1);

    //localStorage.setItem("users",JSON.stringify(users));

    //declanchemnet  de l'evenement

    //this.newchefs.emit(users);
    
  //}

}
