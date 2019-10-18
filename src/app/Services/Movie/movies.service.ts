import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = environment.base_url;

  public popularMovies$;
  public actionAndAdventureMovies$;
  public familyAndDramaMovies$;
  public romanceMovies$;
  public crimeAndThrillerMovies$;
  public animationAndFantasy$;
  public scienceFictionAndHorror$;
  public comedy$;
  public categorizedMovies$;

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const path = this.baseUrl + 'movie/popular?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&page=1'
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

 extractPopularMoviesData(): Observable<any> {
  return this.popularMovies$ = this.getPopularMovies();
 }

 getActionAndAdventureMovies(): Observable<any> {
   // tslint:disable-next-line: max-line-length
   const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12%2C28';
   return this.http.get<Response>(path).pipe(
     retry(3), shareReplay(1)
   );
 }

 extractActionAndAdventureMoviesData(): Observable<any> {
   return this.actionAndAdventureMovies$ = this.getActionAndAdventureMovies();
 }

 getFamilyAndDramaMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18%2C10751';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractFamilyAndDramaMoviesData(): Observable<any> {
  return this.familyAndDramaMovies$ = this.getFamilyAndDramaMovies();
}

getRomanceMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractRomanceMoviesData(): Observable<any> {
  return this.romanceMovies$ = this.getRomanceMovies();
}

getCrimeAndThrillerMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53%2C80';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractCrimeAndThrillerMoviesData(): Observable<any> {
  return this.crimeAndThrillerMovies$ = this.getCrimeAndThrillerMovies();
}

getAimationAndFantasyMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14,16';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractAimationAndFantasyMoviesData(): Observable<any> {
  return this.animationAndFantasy$ = this.getAimationAndFantasyMovies();
}

getScienceFictionAndHorrorMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878,27';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractScienceFictionAndHorrorMoviesData(): Observable<any> {
  return this.scienceFictionAndHorror$ = this.getScienceFictionAndHorrorMovies();
}

getComedyMovies(): Observable<any> {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'discover/movie?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractComedyMoviesData(): Observable<any> {
  return this.scienceFictionAndHorror$ = this.getComedyMovies();
}

getMoviesByCategory(movieCategory: string, pageNumber: number) {
  // tslint:disable-next-line: max-line-length
  const path = this.baseUrl + 'movie/' + movieCategory + '?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&page=' + pageNumber;
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractCategorizedMoviesData(movieCategory: string, pageNumber: number): Observable<any> {
  return this.categorizedMovies$ = this.getMoviesByCategory(movieCategory, pageNumber);
}

getSingleMovie(movie_id: number) {
  const path = this.baseUrl + 'movie/' + movie_id + '?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&append_to_response=videos';
  return this.http.get<Response>(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractMovieData(id) {
  return this.getSingleMovie(id);
}

getSimilarMovies(movieId: number): Observable<any> {
  const path = this.baseUrl + 'movie/' + movieId + '/similar?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&page=1'
  return this.http.get(path).pipe(
    retry(3), shareReplay(1)
  );
}

extractSimilarMovies(id) {
  return this.getSimilarMovies(id)
}
}
