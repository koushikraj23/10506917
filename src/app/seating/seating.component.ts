import { Component, OnInit,Input,AfterViewInit } from '@angular/core';
import {Location} from '@angular/common';

import {Router, NavigationExtras} from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import {SelectedShow} from '../selectedShow';
import{DataService} from '../data.service';
import{ TicketDetails} from '../ticketDetails';
import { FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit,AfterViewInit {



  
  ngAfterViewInit(): void {
    
    if(this.selected===null){
      // console.log("Not reserved");
    }else if(this.selected.seats===null){
      // console.log("Reserved But Seat Not selected");
     } else{
       for(let i of this.seatsBooked) {
        // console.log(i);  
     document.querySelector('#'+i).setAttribute('disabled','true');
    }
    }
   
  }
  book=this.session.retrieve("email")==null?false:true;
  tDisplay = false;
  selectedShow:TicketDetails;
  alphabet;
seat;
s:string;
selected;
seatsBooked:Array<String>=[];
user=this.session.retrieve("username")==null?"Guest": this.session.retrieve("username");
CurrentTime;
checked=false;
email=this.session.retrieve("email")==null?null:this.session.retrieve("email");
 //@Input() selectedShow: SelectedShow;

  constructor(private dataStorage:DataService,private router: Router,private session:SessionStorageService,private location: Location) {

    this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()
    this.alphabet = ["A", "B", "C", "D", "E"];
this.email=this.session.retrieve("email")==null?null:this.session.retrieve("email");

    this.selectedShow=this.dataStorage.storage;
    this.dataStorage.storage=this.selectedShow;
    // console.log(this.selectedShow);
    
this.s=this.selectedShow.show+"-"+this. selectedShow.showTime+"-"+this. selectedShow.day;
// console.log(this.s);

this.selected= JSON.parse(localStorage.getItem(this.s));

 if(this.selected===null){
  console.log("Reserved But Seat Not selected");
 }
else{
  console.log(this.selected);
  this.seatsBooked=this.selected
}

   }
   

  ngOnInit() {
  }

  b:string;

seatPre:Array<String>=[];
clicks:number=0;






  selectSeat($event){
  
 this.b=$event.target.id; 
  //  console.log(this.b);
   
 if(this.seatPre.indexOf(this.b)>-1){
  this.seatPre.splice(this.seatPre.indexOf(this.b), 1);
  this.clicks--;
// console.log(this.seatPre);
 }
 else {
   this.clicks++;
  this.seatPre.push(this.b);
  //document.querySelector('#A1').setAttribute("checked","false");
  // console.log(this.seatPre);


 }
 
    
 

  }

  bookSeat(){
    if(this.clicks!=this.selectedShow.seatCount)
    {
      alert("Please select "+ this.selectedShow.seatCount+"seat/seats");


   } else{
    
  this.confirm();
   
   }
  }

  con(s:string){

    this.email=s;
    if(s==null||s==""){
    alert ("please enter Email or login");
    
    }
    else{
      this.toggle();
    }
    }
    
confirm(){
// console.log(this.user);
   this.selectedShow.seats=this.seatPre
   localStorage.setItem(this.selectedShow.show+"-"+this. selectedShow.showTime+"-"+this. selectedShow.day+"-"+ this.user, JSON.stringify(this. selectedShow));

   this. selectedShow.seats= this.selectedShow.seats.concat(this.seatsBooked);
    this.tDisplay=!this.tDisplay;
    localStorage.setItem(this.selectedShow.show+"-"+this. selectedShow.showTime+"-"+this. selectedShow.day, JSON.stringify(this.selectedShow.seats));
alert("Ticket Booked and successfully sent to your email")
    //this.dataStorage.storage=this.selectedShow;
    this.router.navigate(['/dash']);
}

cancel(){

  this.location.back();
}
  toggle() {

    if(this.clicks!=this.selectedShow.seatCount)
    {
      // console.log(this.seatPre);  
      alert("Please select only "+ this.selectedShow.seatCount+"seats");


   } else{
    //  console.log(this.seatPre);
    this.selectedShow.seats=this.seatPre;
    this.seat=this.seatPre;
    this.tDisplay =!this.tDisplay;
    this.ngOnInit();
   
   
   }
 
  }
 






}
