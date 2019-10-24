import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Models/movie';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-categorized-movies-display',
  templateUrl: './categorized-movies-display.component.html',
  styleUrls: ['./categorized-movies-display.component.scss']
})
export class CategorizedMoviesDisplayComponent implements OnInit, OnDestroy {
  componentIsAlive: boolean;
  @Input() movies;
  @Output() pageNumber: EventEmitter<any> = new EventEmitter();
  moviesPageNumber = 1;
  isPageLoading: boolean;
  navItems = [
    {Name: 'Movies in Theatre', Link: '/films/movies/movies-in-theatre' },
    { Name: 'Comin Soon', Link: '/films/movies/coming-soon'},
    {Name: 'Popular', Link: '/films/movies/popular'},
    {Name: 'Top Rated', Link: '/films/movies/top-rated'}
  ];
  constructor(private route: Router) { }

  getMovieInfo(movie_id) {
    this.route.navigate(['/films/movie', movie_id]);
  }

  extractData(data: Observable<any>) {
    data.pipe(
      takeWhile( () => this.componentIsAlive ),
      ).subscribe(movies => {
        this.movies = [];
        this.isPageLoading = false;
        for (const movie of movies.results) {
          // tslint:disable-next-line: max-line-length
          const { id, title, overview, release_date, backdrop_path, poster_path, genre_ids, vote_count, original_language, vote_average } = movie;
          this.movies.push({
            // tslint:disable-next-line: max-line-length
            id, title, overview, release_date, backdrop_path, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, genre_ids, vote_count, original_language, vote_average
          });
        }
    });
  }

  setNextMoviesPageNum(pageNumber) {
    this.pageNumber.emit(pageNumber);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }
}
