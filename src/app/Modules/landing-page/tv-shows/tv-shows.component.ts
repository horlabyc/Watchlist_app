import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  navItems = [
    {Name: 'TV Airing Today', Link: '' }, { Name: 'On Air', Link: ''}, {Name: 'Popular', Link: ''}, {Name: 'Top Rated', Link: ''}
  ]
  constructor() { }

  ngOnInit() {
  }

}
