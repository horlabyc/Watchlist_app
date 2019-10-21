import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private base_url = environment.base_url;

  public actionAndAdventureShows$;
  public popularShows$;
  public familyAndDramaShows$;
  public RealityShows$;
  public crimeAndMysteryShows$;
  public animation$;
  // tslint:disable-next-line: no-unused-expression
  public sci_fiAndFantasy$;
  public warAndPolitics$;
  public categorizedMovies$;

  constructor(private http: HttpClient) { }


  getActionAndAdventureShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractActionAndAdventureShowsData(): Observable<any> {
    return this.actionAndAdventureShows$ = this.getActionAndAdventureShows();
  }

  getFamilyAndDramaShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18%2C10751&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractFamilyAndDramaShowsData(): Observable<any> {
    return this.familyAndDramaShows$ = this.getFamilyAndDramaShows();
  }

  getRealityShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractRealityShowsData(): Observable<any> {
    return this.RealityShows$ = this.getRealityShows();
  }

  getSci_fiAndFantasyShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractSci_fiAndFantasyShowsData(): Observable<any> {
    return this.sci_fiAndFantasy$ = this.getSci_fiAndFantasyShows();
  }


  getAnimationShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractAnimationShowsData(): Observable<any> {
    return this.animation$ = this.getAnimationShows();
  }

  getCrimeAndMysteryShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80%2C9648&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractCrimeAndMysteryShowsData(): Observable<any> {
    return this.crimeAndMysteryShows$ = this.getCrimeAndMysteryShows();
  }

  getWarAndPoliticsShows(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const path = this.base_url + 'discover/tv?api_key=d5274e9bbcb0aaaaa9589e2e54dce867&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10768&include_null_first_air_dates=false';
    return this.http.get<Response>(path).pipe(
      retry(3), shareReplay(1)
    );
  }

  extractWarAndPoliticsShowsData(): Observable<any> {
    return this.warAndPolitics$ = this.getWarAndPoliticsShows();
  }
}
