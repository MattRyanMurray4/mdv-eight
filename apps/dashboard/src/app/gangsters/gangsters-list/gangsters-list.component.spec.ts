import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangstersListComponent } from './gangsters-list.component';

describe('GangstersListComponent', () => {
  let component: GangstersListComponent;
  let fixture: ComponentFixture<GangstersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangstersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangstersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
