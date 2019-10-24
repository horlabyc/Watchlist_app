import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tvshow } from 'src/app/Models/tvshows';
import { TvshowsService } from 'src/app/Services/tvshows.service';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit, OnDestroy {
  shows: Tvshow[] = [];
  showsPageNumber = 1;
  isPageLoading: boolean;
  componentIsAlive: boolean;
  constructor( private tvshowsService: TvshowsService ) {
    this.componentIsAlive = true;
  }

  extractData(data: Observable<any>) {
    data.pipe(
      takeWhile( () => this.componentIsAlive ),
      ).subscribe(shows => {
        this.shows = [];
        this.isPageLoading = false;
        for (const show of shows.results) {
          // tslint:disable-next-line: max-line-length
          const { id, name, overview, first_air_date, backdrop_path, poster_path, genre_ids, vote_count, original_language, vote_average } = show;
          this.shows.push({
            // tslint:disable-next-line: max-line-length
            id, name, overview, first_air_date, backdrop_path, poster_path: `https://image.tmdb.org/t/p/w200${poster_path}`, genre_ids, original_language, vote_average
          });
        }
    });
  }

  setNextShowsPageNum(pageNumber) {
    this.isPageLoading = true;
    if (pageNumber === 'prev' && this.showsPageNumber > 1 ) {
      pageNumber --;
      this.getShows(pageNumber);
    } else if ( pageNumber === 'prev' && this.showsPageNumber <= 1 ) {
      return;
    } else if (pageNumber === 'next' && this.showsPageNumber < 5) {
      pageNumber ++;
      this.getShows(pageNumber);
    } else if ( pageNumber === 'next' && this.showsPageNumber  >= 5 ) {
      return;
    } else {
      this.getShows(pageNumber);
    }
  }

  async getShows(pageNumber) {
    const shows = await this.tvshowsService.extractCategorizedShowsData('top_rated', pageNumber);
    this.extractData(shows);
    this.showsPageNumber = pageNumber;
  }

  ngOnInit() {
    this.getShows(this.showsPageNumber);
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }
}
