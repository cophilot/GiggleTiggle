import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAgeComponent } from './enter-age.component';

describe('EnterAgeComponent', () => {
  let component: EnterAgeComponent;
  let fixture: ComponentFixture<EnterAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
