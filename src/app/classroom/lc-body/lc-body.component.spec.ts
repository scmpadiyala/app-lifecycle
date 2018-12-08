import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcBodyComponent } from './lc-body.component';

describe('LcBodyComponent', () => {
  let component: LcBodyComponent;
  let fixture: ComponentFixture<LcBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
