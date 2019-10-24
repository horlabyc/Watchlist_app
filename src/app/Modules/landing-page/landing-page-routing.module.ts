import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageGuard } from './landing-page.guard';
import { LandingPageComponent } from './landing-page.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MoviesComponent } from './movies/movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { MoviesInTheatreComponent } from './movies/movies-in-theatre/movies-in-theatre.component';
import { CominSoonMoviesComponent } from './movies/comin-soon-movies/comin-soon-movies.component';
import { MovieComponent } from './movie/movie.component';
import { TopRatedComponent } from './tv-shows/top-rated/top-rated.component';
import { OnAirComponent } from './tv-shows/on-air/on-air.component';
import { AiringTodayComponent } from './tv-shows/airing-today/airing-today.component';
import { PopularComponent } from './tv-shows/popular/popular.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent, canActivate: [LandingPageGuard],
    children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: 'tvshows', component: TvShowsComponent},
      { path: 'movies', component: MoviesComponent},
      { path: 'movie/:movie_id', component: MovieComponent},
      { path: 'movies/top-rated', component: TopRatedMoviesComponent},
      { path: 'movies/popular', component: PopularMoviesComponent},
      { path: 'movies/coming-soon', component: CominSoonMoviesComponent},
      { path: 'movies/movies-in-theatre', component: MoviesInTheatreComponent},
      {  path: 'tvshows/top-rated', component: TopRatedComponent},
      {  path: 'tvshows/on-air', component: OnAirComponent},
      {  path: 'tvshows/airing-today', component: AiringTodayComponent},
      {  path: 'tvshows/popular', component: PopularComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LandingPageRoutingModule { }
