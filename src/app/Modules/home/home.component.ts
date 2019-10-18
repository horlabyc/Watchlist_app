import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../Services/Movie/movies.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<any>;
  movies: Movie[] = [];
  movieToDisplay: Movie = {};
  constructor(private moviesService: MoviesService) { }

  get backgroundImageUrl() {
    // tslint:disable-next-line: max-line-length
    return `linear-gradient(to bottom, rgba(245, 246, 252, 0.26), rgb(0, 0, 0)), url("https://image.tmdb.org/t/p/original${this.movieToDisplay.backdrop_path}")`;
  }

  extractMovies(movies) {
    for (const movie of movies) {
      // tslint:disable-next-line: max-line-length
      const { id, title, overview, release_date, backdrop_path, poster_path, genre_ids, vote_count, original_language, vote_average } = movie;
      this.movies.push({
        id, title, overview, release_date, backdrop_path, poster_path, genre_ids, vote_count, original_language, vote_average
      });
    }
    this.getRandomMovieToDisplay(this.movies);
  }

  getRandomMovieToDisplay(movies) {
    const index = Math.ceil(Math.random() * 19);
    this.movieToDisplay = movies[index];
  }

  ngOnInit() {
    this.movies$ = this.moviesService.extractPopularMoviesData();
    this.movies$.pipe(
      map(movies => movies.results)
    ).subscribe(movies => {
      this.extractMovies(movies);
    });
  }

}
