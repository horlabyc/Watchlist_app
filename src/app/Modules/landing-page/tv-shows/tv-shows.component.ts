import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  navItems = [
    {Name: 'TV Airing Today', Link: '' }, { Name: 'On Air', Link: ''}, {Name: 'Popular', Link: ''}, {Name: 'Top Rated', Link: ''}
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
