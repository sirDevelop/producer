import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatPadsComponent } from './beat-pads.component';

describe('BeatPadsComponent', () => {
  let component: BeatPadsComponent;
  let fixture: ComponentFixture<BeatPadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatPadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
