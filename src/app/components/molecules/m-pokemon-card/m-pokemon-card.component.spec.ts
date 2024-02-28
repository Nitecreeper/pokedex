import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPokemonCardComponent } from './m-pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: MPokemonCardComponent;
  let fixture: ComponentFixture<MPokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MPokemonCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MPokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
