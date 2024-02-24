import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNavBarComponent } from './t-nav-bar.component';

describe('TNavBarComponent', () => {
  let component: TNavBarComponent;
  let fixture: ComponentFixture<TNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
