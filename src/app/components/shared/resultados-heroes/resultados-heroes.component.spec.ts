import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosHeroesComponent } from './resultados-heroes.component';

describe('ResultadosHeroesComponent', () => {
  let component: ResultadosHeroesComponent;
  let fixture: ComponentFixture<ResultadosHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
