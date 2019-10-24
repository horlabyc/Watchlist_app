import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from 'src/app/Services/Movie/movies.service';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  id = 'zqUopiAYdRg';
  playerVars = {
    cc_lang_pref: 'en'
  };
  navItems = [
    {Name: 'Movies in Theatre', Link: '/films/movies/movies-in-theatre' },
    { Name: 'Comin Soon', Link: '/films/movies/coming-soon'},
    {Name: 'Popular', Link: '/films/movies/popular'},
    {Name: 'Top Rated', Link: '/films/movies/top-rated'}
  ];
  private player;
  private ytEvent;
  // private videoHeight;
  videoWidth; videoHeight;
  private sub: Subscription;
  movieData: any;
  similarMovies: Movie[];
  constructor(private route: ActivatedRoute, private movieService: MoviesService, private router: Router ) {
    if (window.innerWidth <= 560 || window.innerWidth <= 768) {
      this.videoWidth = 300;
      this.videoHeight = 300;
    } else {
      this.videoWidth = 560;
      this.videoHeight = 450;
    }
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  get backgroundImageUrl() {
    // tslint:disable-next-line: max-line-length
    return `linear-gradient(to bottom, rgba(245, 246, 252, 0.26), rgb(0, 0, 0)), url("https://image.tmdb.org/t/p/original${this.movieData.backdrop_path}")`;
  }

  extractMovieData(data: Observable<any>) {
    data.subscribe(response => {
      if (response ) {
        const { title, homepage, overview, release_date, popularity, vote_average, adult, tagline, genres, backdrop_path } = response;
        this.movieData = {
        title, homepage, overview, release_date, popularity, vote_average, adult, tagline,
        genres,  backdrop_path, video: `https://www.youtube.com/embed/${response.videos.results[0].key}`
      };
      }
    });
  }

  getMovieDetails() {
    this.sub = this.route.params.subscribe(params => {
      this.extractMovieData(this.movieService.extractMovieData(params.movie_id));
      this.extactSimilarMovieData(this.movieService.extractSimilarMovies(params.movie_id));
    });
  }

  extactSimilarMovieData(movies: Observable<any>) {
    const similarMovies = [];
    movies.subscribe(response => {
      if (response) {
        for (let index = 0; index <= 5; index ++) {
          const { id, poster_path, backdrop_path } = response.results[index]
          similarMovies.push({
            // tslint:disable-next-line: max-line-length
            id, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, backdrop_path: `https://image.tmdb.org/t/p/w200${backdrop_path}`
          });
        }
        this.similarMovies = similarMovies;
      }
    });
  }

  getMovieInfo(movieId) {
    this.router.navigate(['/films/movie', movieId]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
   this.getMovieDetails();
  }

}
