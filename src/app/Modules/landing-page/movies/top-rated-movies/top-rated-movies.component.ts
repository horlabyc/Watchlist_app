import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MoviesService } from 'src/app/Services/Movie/movies.service';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  componentIsAlive: boolean;
  movies: Movie[] = [];
  moviesPageNumber = 1;
  isPageLoading: boolean;

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
    const movies = await this.movieService.extractCategorizedMoviesData('top_rated', pageNumber);
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
