import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  navItems = [
    {Name: 'Movies in Theatre', Link: '/films/movies/movies-in-theatre' },
    { Name: 'Comin Soon', Link: '/films/movies/coming-soon'},
    {Name: 'Popular', Link: '/films/movies/popular'},
    {Name: 'Top Rated', Link: '/films/movies/top-rated'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
