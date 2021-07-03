import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthsComponent } from './synths.component';

describe('SynthsComponent', () => {
  let component: SynthsComponent;
  let fixture: ComponentFixture<SynthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
