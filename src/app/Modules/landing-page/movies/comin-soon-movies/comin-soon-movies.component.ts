import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { MoviesService } from 'src/app/Services/Movie/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comin-soon-movies',
  templateUrl: './comin-soon-movies.component.html',
  styleUrls: ['./comin-soon-movies.component.scss']
})
export class CominSoonMoviesComponent implements OnInit, OnDestroy {
  componentIsAlive: boolean;
  movies: Movie[] = [];
  moviesPageNumber = 1;
  isPageLoading: boolean;
  navItems = [
    {Name: 'Movies in Theatre', Link: '/films/movies/movies-in-theatre' },
    { Name: 'Comin Soon', Link: '/films/movies/coming-soon'},
    {Name: 'Popular', Link: '/films/movies/popular'},
    {Name: 'Top Rated', Link: '/films/movies/top-rated'}
  ];
  constructor( private movieService: MoviesService, private route: Router ) {
    this.componentIsAlive = true;
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
    this.isPageLoading = true;
    if (pageNumber === 'prev' && this.moviesPageNumber > 1 ) {
      pageNumber --;
      this.getMovies(pageNumber);
    } else if ( pageNumber === 'prev' && this.moviesPageNumber <= 1 ) {
      return;
    } else if (pageNumber === 'next' && this.moviesPageNumber < 5) {
      pageNumber ++;
      this.getMovies(pageNumber);
    } else if ( pageNumber === 'next' && this.moviesPageNumber  >= 5 ) {
      return;
    } else {
      this.getMovies(pageNumber);
    }
  }

  async getMovies(pageNumber) {
    const movies = await this.movieService.extractCategorizedMoviesData('upcoming', pageNumber);
    this.extractData(movies);
    this.moviesPageNumber = pageNumber;
  }

  getMovieInfo(movie_id) {
    this.route.navigate(['/films/movie', movie_id]);
  }

  ngOnInit() {
    this.getMovies(this.moviesPageNumber);
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }
}
