import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthDetailsComponent } from './synth-details.component';

describe('SynthDetailsComponent', () => {
  let component: SynthDetailsComponent;
  let fixture: ComponentFixture<SynthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
