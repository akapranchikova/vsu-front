import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCheckComponent } from './tournament-check.component';

describe('TournamentCheckComponent', () => {
  let component: TournamentCheckComponent;
  let fixture: ComponentFixture<TournamentCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
