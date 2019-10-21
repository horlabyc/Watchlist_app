import { Component, OnInit, Input } from '@angular/core';
import { Tvshow } from 'src/app/Models/tvshows';
import { Observable } from 'rxjs';
import { TvshowsService } from 'src/app/Services/tvshows.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tv-shows-display',
  templateUrl: './tv-shows-display.component.html',
  styleUrls: ['./tv-shows-display.component.scss']
})
export class TvShowsDisplayComponent implements OnInit {
  @Input() categoryName: string;
  tvShows: Tvshow[] = [];
  tvShows$: Observable<any>;

  constructor( private tvshowsService: TvshowsService, private router: Router) {

  }

  extractShowss(shows) {
    for (let count = 0; count < 10; count++) {
      // tslint:disable-next-line: max-line-length
      const { id, name, overview, first_air_date, backdrop_path, poster_path, genre_ids, original_language, vote_average } = shows[count];
      this.tvShows.push({
        // tslint:disable-next-line: max-line-length
        id, name, overview, first_air_date, backdrop_path, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, genre_ids, original_language, vote_average
      });
    }
   }

  fetchMovieStream(tvshowCategory: Observable<any>) {
    tvshowCategory.pipe(
       map(movies => movies.results)
     ).subscribe(movies => {
       this.extractShowss(movies);
     });
   }

  ngOnInit() {
    if (this.categoryName === 'Action and Adventure') {
      this.tvShows$ = this.tvshowsService.extractActionAndAdventureShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'Family and Drama') {
      this.tvShows$ = this.tvshowsService.extractFamilyAndDramaShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'Reality') {
      this.tvShows$ = this.tvshowsService.extractRealityShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'Sci-Fi and Fantasy') {
      this.tvShows$ = this.tvshowsService.extractSci_fiAndFantasyShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'Animation') {
      this.tvShows$ = this.tvshowsService.extractAnimationShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'Crime and Mystery') {
      this.tvShows$ = this.tvshowsService.extractCrimeAndMysteryShowsData();
      this.fetchMovieStream(this.tvShows$);
    } else if (this.categoryName === 'War and Politics') {
      this.tvShows$ = this.tvshowsService.extractWarAndPoliticsShowsData();
      this.fetchMovieStream(this.tvShows$);
    }
  }

}
