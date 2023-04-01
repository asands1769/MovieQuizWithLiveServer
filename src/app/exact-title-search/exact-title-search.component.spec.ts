import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactTitleSearchComponent } from './exact-title-search.component';

describe('ExactTitleSearchComponent', () => {
  let component: ExactTitleSearchComponent;
  let fixture: ComponentFixture<ExactTitleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactTitleSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactTitleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
