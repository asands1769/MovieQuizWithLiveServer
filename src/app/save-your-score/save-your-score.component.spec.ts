import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveYourScoreComponent } from './save-your-score.component';

describe('SaveYourScoreComponent', () => {
  let component: SaveYourScoreComponent;
  let fixture: ComponentFixture<SaveYourScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveYourScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveYourScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
