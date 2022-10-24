import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEntriesComponent } from './completed-entries.component';

describe('CompletedEntriesComponent', () => {
  let component: CompletedEntriesComponent;
  let fixture: ComponentFixture<CompletedEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
