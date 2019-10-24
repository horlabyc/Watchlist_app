import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-categorized-tvshows-display',
  templateUrl: './categorized-tvshows-display.component.html',
  styleUrls: ['./categorized-tvshows-display.component.scss']
})
export class CategorizedTvshowsDisplayComponent implements OnInit, OnDestroy {
  navItems = [
    {Name: 'TV Airing Today', Link: '/films/tvshows/airing-today' },
    { Name: 'On Air', Link: '/films/tvshows/on-air'},
    {Name: 'Popular', Link: '/films/tvshows/popular'},
    {Name: 'Top Rated', Link: '/films/tvshows/top-rated'}
  ];
  isPageLoading: boolean;
  componentIsAlive: boolean;
  @Input() shows;
  @Output() pageNumber: EventEmitter<any> = new EventEmitter();
  constructor() { }

  extractData(data: Observable<any>) {
    data.pipe(
      takeWhile( () => this.componentIsAlive ),
      ).subscribe(shows => {
        this.shows = [];
        this.isPageLoading = false;
        for (const show of shows.results) {
          // tslint:disable-next-line: max-line-length
          const {  id, name, overview, first_air_date, backdrop_path, poster_path, genre_ids, original_language, vote_average } = show;
          this.shows.push({
            // tslint:disable-next-line: max-line-length
            id, name, overview, first_air_date, backdrop_path, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, genre_ids, original_language, vote_average
          });
        }
    });
  }

  getMovieInfo(movie_id) {
    // this.route.navigate(['/films/movie', movie_id]);
  }

  setNextMoviesPageNum(pageNumber) {
    this.pageNumber.emit(pageNumber);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.componentIsAlive = false;
  }
}
