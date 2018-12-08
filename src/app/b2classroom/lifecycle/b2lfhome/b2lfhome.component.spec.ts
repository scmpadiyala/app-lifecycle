import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2lfhomeComponent } from './b2lfhome.component';

describe('B2lfhomeComponent', () => {
  let component: B2lfhomeComponent;
  let fixture: ComponentFixture<B2lfhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2lfhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2lfhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
