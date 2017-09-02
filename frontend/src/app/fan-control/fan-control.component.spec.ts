import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanControlComponent } from './fan-control.component';

describe('FanControlComponent', () => {
  let component: FanControlComponent;
  let fixture: ComponentFixture<FanControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
