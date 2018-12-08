import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2lfcontactComponent } from './b2lfcontact.component';

describe('B2lfcontactComponent', () => {
  let component: B2lfcontactComponent;
  let fixture: ComponentFixture<B2lfcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2lfcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2lfcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
