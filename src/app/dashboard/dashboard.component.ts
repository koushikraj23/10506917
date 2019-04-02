import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cinema } from '../cinema.service';
import { Movie } from '../movie';
import{ TicketDetails} from '../ticketDetails';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {trailorList} from '../trailors';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
display;
movieListing:Array<Movie> = [];
safeSrc: SafeResourceUrl;

trailer=trailorList;
constructor(private cinema: Cinema,private sanitizer: DomSanitizer) { 
  this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3EMkxEKKSQI");

this.display=false;

  }
  toggle(i:number){
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(trailorList[i]);
  this.display = !this.display;

}
  ngOnInit() {
    this.cinema.getMovies().subscribe(moviesList => {
      console.log(moviesList);
      this.movieListing = moviesList;
      console.log(this.movieListing.length);
    })
}
}