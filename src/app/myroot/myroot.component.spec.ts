import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrootComponent } from './myroot.component';

describe('MyrootComponent', () => {
  let component: MyrootComponent;
  let fixture: ComponentFixture<MyrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
