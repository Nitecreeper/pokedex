import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APokemonNameComponent } from './a-pokemon-name.component';

describe('APokemonNameComponent', () => {
  let component: APokemonNameComponent;
  let fixture: ComponentFixture<APokemonNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APokemonNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APokemonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
