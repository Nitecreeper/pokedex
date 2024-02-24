import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPokemonListComponent } from './p-pokemon-list.component';

describe('PPokemonListComponent', () => {
  let component: PPokemonListComponent;
  let fixture: ComponentFixture<PPokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPokemonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
