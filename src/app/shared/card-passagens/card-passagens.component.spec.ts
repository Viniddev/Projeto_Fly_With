import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassagensComponent } from './card-passagens.component';

describe('CardPassagensComponent', () => {
  let component: CardPassagensComponent;
  let fixture: ComponentFixture<CardPassagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPassagensComponent]
    });
    fixture = TestBed.createComponent(CardPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
