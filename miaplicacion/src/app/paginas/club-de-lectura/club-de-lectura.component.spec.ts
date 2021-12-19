import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDeLecturaComponent } from './club-de-lectura.component';

describe('ClubDeLecturaComponent', () => {
  let component: ClubDeLecturaComponent;
  let fixture: ComponentFixture<ClubDeLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDeLecturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDeLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
