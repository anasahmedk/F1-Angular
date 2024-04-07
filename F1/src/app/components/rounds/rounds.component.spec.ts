import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundInputComponent } from './rounds.component';

describe('RoundInputComponent', () => {
  let component: RoundInputComponent;
  let fixture: ComponentFixture<RoundInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
