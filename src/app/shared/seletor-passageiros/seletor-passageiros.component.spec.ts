import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPassageirosComponent } from './seletor-passageiros.component';

describe('SeletorPassageirosComponent', () => {
  let component: SeletorPassageirosComponent;
  let fixture: ComponentFixture<SeletorPassageirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeletorPassageirosComponent]
    });
    fixture = TestBed.createComponent(SeletorPassageirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
