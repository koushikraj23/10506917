import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SeatingComponent } from './seating/seating.component';
import{ShowtimesComponent} from './showtimes/showtimes.component'
import{MovieDescComponent}from "./movie-desc/movie-desc.component"
import{DashboardComponent} from "./dashboard/dashboard.component"
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [  {path: '', redirectTo: '/dash', pathMatch: 'full'},
{ path: 'seat', component: SeatingComponent },
{path:'register',component: RegisterComponent},
{ path: 'show', component: ShowtimesComponent },
{path: 'movie/:id', component: MovieDescComponent},
{path: 'dash', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
