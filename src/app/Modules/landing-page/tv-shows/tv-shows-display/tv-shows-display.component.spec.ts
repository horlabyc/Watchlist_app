import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsDisplayComponent } from './tv-shows-display.component';

describe('TvShowsDisplayComponent', () => {
  let component: TvShowsDisplayComponent;
  let fixture: ComponentFixture<TvShowsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
