import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieQuizComponent } from './movie-quiz.component';

describe('MovieQuizComponent', () => {
  let component: MovieQuizComponent;
  let fixture: ComponentFixture<MovieQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
