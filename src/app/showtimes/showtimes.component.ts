import { Component, OnInit } from '@angular/core';
import { Cinema } from '../cinema.service';
import { SelectedShow } from '../selectedShow';
import{ TicketDetails} from '../ticketDetails';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})
export class ShowtimesComponent implements OnInit {
  mDisplay = false;

  showDetails: TicketDetails={id:0,adult:0,amount:0,child:0,combo1:0,combo2:0,day:"",seatCount:0,seats:[],show:"",showTime:"",student:0};

  movieListing = [];
  constructor(private cinema: Cinema) { 
    
  
  }
  
  selected(time: string, title: string,day:string) {
    this.showDetails.show=title;
    this.showDetails.showTime=time;
    this.showDetails.day=day; 

    this.mDisplay = !this.mDisplay;
  }

  toggle($event) {
    this.mDisplay = $event;
    console.log(this.mDisplay);
    console.log("recived");
  }

  ngOnInit() {
    this.cinema.getMovies().subscribe(moviesList => {
      console.log(moviesList);
      this.movieListing = moviesList;
      console.log(this.movieListing);
    })
    console.log(this.showDetails)
   


  }


}
