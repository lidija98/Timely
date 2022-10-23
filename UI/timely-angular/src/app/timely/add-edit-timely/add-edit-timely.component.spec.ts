import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTimelyComponent } from './add-edit-timely.component';

describe('AddEditTimelyComponent', () => {
  let component: AddEditTimelyComponent;
  let fixture: ComponentFixture<AddEditTimelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTimelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTimelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
