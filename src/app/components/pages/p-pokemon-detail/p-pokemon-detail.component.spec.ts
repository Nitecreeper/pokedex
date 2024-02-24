import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPokemonDetailComponent } from './p-pokemon-detail.component';

describe('PPokemonDetailComponent', () => {
  let component: PPokemonDetailComponent;
  let fixture: ComponentFixture<PPokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPokemonDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PPokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
