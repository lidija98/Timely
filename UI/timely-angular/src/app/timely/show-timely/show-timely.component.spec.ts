import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimelyComponent } from './show-timely.component';

describe('ShowTimelyComponent', () => {
  let component: ShowTimelyComponent;
  let fixture: ComponentFixture<ShowTimelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTimelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
