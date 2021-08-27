import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangsterDetailsComponent } from './gangster-details.component';

describe('GangsterDetailsComponent', () => {
  let component: GangsterDetailsComponent;
  let fixture: ComponentFixture<GangsterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangsterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangsterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
