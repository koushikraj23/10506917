import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowtimesComponent } from './showtimes/showtimes.component';
import{Cinema} from './cinema.service';
import {HttpClientModule} from '@angular/common/http';
import { BookingListComponent } from './booking-list/booking-list.component';
import { SeatingComponent } from './seating/seating.component';
import { ImgSrcDirective } from './img-src.directive';
import { FormsModule } from '@angular/forms';
import { FinalTicketComponent } from './final-ticket/final-ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{NavigatorComponent} from'./navigator/navigator.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import{NgxWebstorageModule}from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    ShowtimesComponent,
    BookingListComponent,
    SeatingComponent,
    ImgSrcDirective,
    FinalTicketComponent,
    DashboardComponent,
    NavigatorComponent,
    MovieDescComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  FormsModule,
  NgxWebstorageModule.forRoot()
  ],
  providers: [Cinema],
  bootstrap: [AppComponent]
})
export class AppModule { }
