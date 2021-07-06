import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthNewComponent } from './synth-new.component';

describe('SynthNewComponent', () => {
  let component: SynthNewComponent;
  let fixture: ComponentFixture<SynthNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
