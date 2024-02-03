import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoPageComponent } from './pokemon-info-page.component';

describe('PokemonInfoPageComponent', () => {
  let component: PokemonInfoPageComponent;
  let fixture: ComponentFixture<PokemonInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonInfoPageComponent]
    });
    fixture = TestBed.createComponent(PokemonInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
