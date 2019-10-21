import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LandingPageComponent } from './landing-page.component';
import { TopNavComponent } from './topNav/topNav.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MoviesComponent } from './movies/movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { MoviesInTheatreComponent } from './movies/movies-in-theatre/movies-in-theatre.component';
import { CominSoonMoviesComponent } from './movies/comin-soon-movies/comin-soon-movies.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { MoviesDisplayComponent } from './movies/movies-display/movies-display.component';
import { MovieComponent } from './movie/movie.component';
import { SafePipe } from 'src/app/Utilities/safe.pipe';
import { TvShowsDisplayComponent } from './tv-shows/tv-shows-display/tv-shows-display.component';



@NgModule({
  declarations: [LandingPageComponent, TopNavComponent, TvShowsComponent,
    MoviesComponent, TopRatedMoviesComponent, MoviesInTheatreComponent,
    SafePipe,
    CominSoonMoviesComponent, PopularMoviesComponent, MoviesDisplayComponent, MovieComponent, TvShowsDisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxYoutubePlayerModule.forRoot(),
    LandingPageRoutingModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class LandingPageModule { }
