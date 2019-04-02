import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 import { map } from 'rxjs/operators';
import { Movie } from './movie';
@Injectable()
export class Cinema {
movie;
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const url = 'https://college-movies.herokuapp.com/';

    return this.http.get<Movie[]>(url);
  }
  getMovie(i:number): Observable<Movie[]> {
    const url = 'https://college-movies.herokuapp.com/';

    this.movie= this.http.get<Movie[]>(url);
return this.movie[i];

  }


  _getMovies() {
    console.log("I am the movie service");
    const movies = [

      { title: 'Movie 1', year: 'year1', director: 'Director 1' },
      { title: 'Movie 2', year: 2002, director: 'Director 2' },
      { title: 'Movie 3', year: 2018, director: 'Director 3' },
      { title: 'Movie 4', year: 2018, director: 'Director 4' }

    ];
    console.log(movies)
    return movies;

  }

}