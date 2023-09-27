import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactosComponent } from './modal-contactos.component';

describe('ModalContactosComponent', () => {
  let component: ModalContactosComponent;
  let fixture: ComponentFixture<ModalContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContactosComponent]
    });
    fixture = TestBed.createComponent(ModalContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
