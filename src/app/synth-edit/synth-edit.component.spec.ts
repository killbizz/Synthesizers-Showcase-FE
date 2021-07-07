import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthEditComponent } from './synth-edit.component';

describe('SynthEditComponent', () => {
  let component: SynthEditComponent;
  let fixture: ComponentFixture<SynthEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
