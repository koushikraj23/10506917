import { Component, OnInit, Input,Output,EventEmitter,OnChanges,SimpleChange  } from '@angular/core';
import {SelectedShow} from '../selectedShow';
import { FormGroup, FormControl, Validators,FormBuilder,FormsModule} from '@angular/forms';
import{ TicketDetails} from '../ticketDetails';
import{TD} from "./td"
import { stringify } from 'querystring';
import {Router, NavigationExtras} from '@angular/router';
import{DataService} from '../data.service';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
 
  @Input() mDisplay:boolean;
  @Input() selectedShow: TicketDetails;
  @Output() mDisplayEmitter= new EventEmitter<boolean>();
  contactForm: FormGroup;
  changeLog : string[] = []; 
  child:number=0;
  adult:number=0;
  combo1:number=0;
  combo2:number=0;
  student:number=0;
id:string;
tickets:number=0;

//to detect changes from
  ngOnChanges(changes : {[propKey:string]: SimpleChange}){

    let  log : string [] =[];
    for(let prev in changes){
        let curt = changes[prev];
        this.contactForm.get('show').setValue(this.selectedShow.show);
        this.contactForm.get('showTime').setValue(this.selectedShow.showTime);
        this.contactForm.get('day').setValue(this.selectedShow.day);
        this.contactForm.get('id').setValue(this.selectedShow.id);
    }

    this.changeLog.push(log.join(', '));

}



  constructor(private formBuilder: FormBuilder,private router: Router,private dataStorage:DataService) {
    this.contactForm = this.createFormGroupWithBuilderAndModel(formBuilder);
   
   

}

   toggle(){
    this.mDisplay = !this.mDisplay;
   
   // console.log(this.selectedShow);
    this.mDisplayEmitter.emit(this.mDisplay);
  //  console.log(this.mDisplay);
   }
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    
    return formBuilder.group(new TicketDetails());
  }
  ngOnInit() {
   
  }
  onClickSubmit(data) {
data.seatCount=data.adult+data.child+data.student;
data.amount=(data.adult*13.25)+(data.student*10.00)+(data.child*8.25)+(data.combo1*6)+(data.combo2*7.30);
    data.amount
    this.dataStorage.storage = data;

    this.id=data.show+"-"+data.showTime;
  
if(data.seatCount>0){
  this.router.navigate(['/seat']);
}else{
  alert("please select seat.")
}
  
  }

}
