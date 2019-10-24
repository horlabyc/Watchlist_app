import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedMoviesDisplayComponent } from './categorized-movies-display.component';

describe('CategorizedMoviesDisplayComponent', () => {
  let component: CategorizedMoviesDisplayComponent;
  let fixture: ComponentFixture<CategorizedMoviesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedMoviesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedMoviesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
