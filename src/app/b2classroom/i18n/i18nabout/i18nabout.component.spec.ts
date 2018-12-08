import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18naboutComponent } from './i18nabout.component';

describe('I18naboutComponent', () => {
  let component: I18naboutComponent;
  let fixture: ComponentFixture<I18naboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18naboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18naboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
