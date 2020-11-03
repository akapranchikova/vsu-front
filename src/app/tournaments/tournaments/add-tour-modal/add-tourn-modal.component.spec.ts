import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTournModalComponent } from './add-tourn-modal.component';

describe('AddSponsorModalComponent', () => {
  let component: AddTournModalComponent;
  let fixture: ComponentFixture<AddTournModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTournModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTournModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
