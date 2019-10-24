import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  category1 = 'Action and Adventure';
  category2 = 'Animation and Fantasy';
  category3 = 'Comedy';
  category4 = 'Crime and Thriller';
  category5 = 'Family and Drama';
  category6 = 'Romance';
  category7 = 'Science Fiction and Horror';
  navItems = [
    {Name: 'Movies in Theatre', Link: '/films/movies/movies-in-theatre' },
    { Name: 'Comin Soon', Link: '/films/movies/coming-soon'},
    {Name: 'Popular', Link: '/films/movies/popular'},
    {Name: 'Top Rated', Link: '/films/movies/top-rated'}
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
