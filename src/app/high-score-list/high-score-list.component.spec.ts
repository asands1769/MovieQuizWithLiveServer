import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreListComponent } from './high-score-list.component';

describe('HighScoreListComponent', () => {
  let component: HighScoreListComponent;
  let fixture: ComponentFixture<HighScoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoreListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
