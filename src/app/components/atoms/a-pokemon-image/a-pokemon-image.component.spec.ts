import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APokemonImageComponent } from './a-pokemon-image.component';

describe('APokemonImageComponent', () => {
  let component: APokemonImageComponent;
  let fixture: ComponentFixture<APokemonImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APokemonImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APokemonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
