import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercambioDeLibrosComponent } from './intercambio-de-libros.component';

describe('IntercambioDeLibrosComponent', () => {
  let component: IntercambioDeLibrosComponent;
  let fixture: ComponentFixture<IntercambioDeLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercambioDeLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambioDeLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
