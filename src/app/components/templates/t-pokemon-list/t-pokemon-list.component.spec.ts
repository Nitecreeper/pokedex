import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPokemonListComponent } from './t-pokemon-list.component';

describe('TPokemonListComponent', () => {
  let component: TPokemonListComponent;
  let fixture: ComponentFixture<TPokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPokemonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
