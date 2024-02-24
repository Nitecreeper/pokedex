import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPokemonCardListComponent } from './o-pokemon-card-list.component';

describe('OPokemonCardListComponent', () => {
  let component: OPokemonCardListComponent;
  let fixture: ComponentFixture<OPokemonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OPokemonCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPokemonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
