import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  navItems = [
    {Name: 'TV Airing Today', Link: '/films/tvshows/airing-today' },
    { Name: 'On Air', Link: '/films/tvshows/on-air'},
    {Name: 'Popular', Link: '/films/tvshows/popular'},
    {Name: 'Top Rated', Link: '/films/tvshows/top-rated'}
  ];
  category1 = 'Action and Adventure';
  category2 = 'Animation';
  category3 = 'War and Politics';
  category4 = 'Crime and Mystery';
  category5 = 'Family and Drama';
  category6 = 'Reality';
  category7 = 'Sci-Fi and Fantasy';
  constructor() { }

  ngOnInit() {
  }

}
