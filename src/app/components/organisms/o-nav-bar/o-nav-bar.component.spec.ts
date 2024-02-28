import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONavBarComponent } from './o-nav-bar.component';

describe('ONavBarComponent', () => {
  let component: ONavBarComponent;
  let fixture: ComponentFixture<ONavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ONavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ONavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
