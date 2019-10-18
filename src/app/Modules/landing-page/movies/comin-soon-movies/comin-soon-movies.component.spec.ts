import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CominSoonMoviesComponent } from './comin-soon-movies.component';

describe('CominSoonMoviesComponent', () => {
  let component: CominSoonMoviesComponent;
  let fixture: ComponentFixture<CominSoonMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CominSoonMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CominSoonMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
