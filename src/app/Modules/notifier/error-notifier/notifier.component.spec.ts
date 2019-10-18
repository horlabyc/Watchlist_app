import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotifierComponent } from '../notifier/notifier.component'

describe('ErrorNotifierComponent', () => {
  let component: NotifierComponent;
  let fixture: ComponentFixture<NotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
