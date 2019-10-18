import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInTheatreComponent } from './movies-in-theatre.component';

describe('MoviesInTheatreComponent', () => {
  let component: MoviesInTheatreComponent;
  let fixture: ComponentFixture<MoviesInTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
