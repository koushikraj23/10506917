import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cinema } from '../cinema.service';
import { Movie } from '../movie';
import{ TicketDetails} from '../ticketDetails';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { trailorList } from '../trailors';
@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.css'],
  
})

export class MovieDescComponent implements OnInit {
  mon;tue;wed;thu;fri;sat;sun;
  i;
  movies;
  movie;
display;
mDisplay = false;
safeSrc: SafeResourceUrl;
showDetails: TicketDetails={id:0,adult:0,amount:0,child:0,combo1:0,combo2:0,day:"",seatCount:0,seats:[],show:"",showTime:"",student:0};

  
  toggleTrailer(i:number){
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(trailorList[i]);
    this.display = !this.display;
  
  }
    toggle($event) {
      this.mDisplay = $event;
      console.log(this.mDisplay);
      console.log("recived");
    }
  
    selected(time: string, title: string,day:string) {
      this.showDetails.show=title;
      this.showDetails.showTime=time;
      this.showDetails.day=day; 
  this.showDetails.id=this.i;
      this.mDisplay = !this.mDisplay;
    }

  constructor(  private route: ActivatedRoute,
    private  cinema: Cinema,
    private location: Location,private sanitizer: DomSanitizer) { 
      this.display=false;
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3EMkxEKKSQI");

this.mon=true;
this.tue=true;
this.wed=true;
this.thu=true;
this.fri=true;
this.sat=true;
this.sun=true;
this.cinema.getMovies().subscribe(moviesList => {
    
  this.i = +this.route.snapshot.paramMap.get('id');
  console.log(this.i);
  this.movies = moviesList;
this.movie=moviesList[this.i-1];

})
  }

  ngOnInit() {

    // this.cinema.getMovies().subscribe(moviesList => {
    
    //   this.i = +this.route.snapshot.paramMap.get('id');
    //   console.log(this.i);
    //   this.movie = moviesList[this.i-1];
    //   console.log(this.movie);
    
    // })
  }
 
}
