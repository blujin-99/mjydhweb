import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSistemasComponent } from './lista-sistemas.component';

describe('ListaSistemasComponent', () => {
  let component: ListaSistemasComponent;
  let fixture: ComponentFixture<ListaSistemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSistemasComponent]
    });
    fixture = TestBed.createComponent(ListaSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
