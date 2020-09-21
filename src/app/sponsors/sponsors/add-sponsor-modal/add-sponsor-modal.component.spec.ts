import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponsorModalComponent } from './add-sponsor-modal.component';

describe('AddSponsorModalComponent', () => {
  let component: AddSponsorModalComponent;
  let fixture: ComponentFixture<AddSponsorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSponsorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSponsorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
