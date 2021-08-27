import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangstersComponent } from './gangsters.component';

describe('GangstersComponent', () => {
  let component: GangstersComponent;
  let fixture: ComponentFixture<GangstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
