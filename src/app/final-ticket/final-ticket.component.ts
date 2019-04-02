import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import{DataService} from '../data.service';
import{ TicketDetails} from '../ticketDetails';

@Component({
  selector: 'app-final-ticket',
  templateUrl: './final-ticket.component.html',
  styleUrls: ['./final-ticket.component.css']
})
export class FinalTicketComponent implements OnInit {
  @Input() tDisplay:boolean;
  @Input() selectedShow:TicketDetails;
  @Output() tDisplayEmitter= new EventEmitter<boolean>();
  @Output() resetEmitter= new EventEmitter();
  
//to detect changes from
ngOnChanges(changes : {[propKey:string]: SimpleChange}){

  let  log : string [] =[];
  for(let prev in changes){
      let curt = changes[prev];
      console.log(this.selectedShow);
  }

  

}
  constructor(private dataStorage:DataService) {

    console.log(this.selectedShow);

   }

  ngOnInit() {
    console.log(this.selectedShow);
  }

  toggle(){
    this.tDisplay = !this.tDisplay;
   
    this.tDisplayEmitter.emit(this.tDisplay);
    this.resetEmitter.emit();
  //  console.log(this.mDisplay);
   }

   getDetails(){
    

    console.log(this.selectedShow);
   
   }

}
