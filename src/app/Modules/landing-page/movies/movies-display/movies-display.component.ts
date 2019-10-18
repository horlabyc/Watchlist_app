import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/Services/Movie/movies.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.scss']
})
export class MoviesDisplayComponent implements OnInit {
  @Input() categoryName: string;
  popularMovies$: Observable<any>;
  actionAndAdventureMovies$: Observable<any>;
  familyAndDrama$: Observable<any>;
  romance$: Observable<any>;
  crimeAndThriller$: Observable<any>;
  movies$: Observable<any>;
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  extractMovies(movies) {
    for (let count = 0; count < 10; count++) {
      // tslint:disable-next-line: max-line-length
      const { id, title, overview, release_date, backdrop_path, poster_path, genre_ids, vote_count, original_language, vote_average } = movies[count];
      this.movies.push({
        // tslint:disable-next-line: max-line-length
        id, title, overview, release_date, backdrop_path, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, genre_ids, vote_count, original_language, vote_average
      });
    }
  }

  fetchMovieStream(movieCategory: Observable<any>) {
   movieCategory.pipe(
      map(movies => movies.results)
    ).subscribe(movies => {
      this.extractMovies(movies);
    });
  }

  ngOnInit() {
    if (this.categoryName === 'Popular') {
      this.movies$ = this.movieService.extractPopularMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Action and Adventure') {
      this.movies$ = this.movieService.extractActionAndAdventureMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Family and Drama') {
      this.movies$ = this.movieService.extractFamilyAndDramaMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Romance') {
      this.movies$ = this.movieService.extractRomanceMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Crime and Thriller') {
      this.movies$ = this.movieService.extractCrimeAndThrillerMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Animation and Fantasy') {
      this.movies$ = this.movieService.extractAimationAndFantasyMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Science Fiction and Horror') {
      this.movies$ = this.movieService.extractScienceFictionAndHorrorMoviesData();
      this.fetchMovieStream(this.movies$);
    } else if (this.categoryName === 'Comedy') {
      this.movies$ = this.movieService.extractComedyMoviesData();
      this.fetchMovieStream(this.movies$);
    }

  }

}
