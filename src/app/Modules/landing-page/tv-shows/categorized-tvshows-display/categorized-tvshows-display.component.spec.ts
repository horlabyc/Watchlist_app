import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedTvshowsDisplayComponent } from './categorized-tvshows-display.component';

describe('CategorizedTvshowsDisplayComponent', () => {
  let component: CategorizedTvshowsDisplayComponent;
  let fixture: ComponentFixture<CategorizedTvshowsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizedTvshowsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizedTvshowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
