import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2lfaboutComponent } from './b2lfabout.component';

describe('B2lfaboutComponent', () => {
  let component: B2lfaboutComponent;
  let fixture: ComponentFixture<B2lfaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2lfaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2lfaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
