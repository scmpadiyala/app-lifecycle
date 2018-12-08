import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18ncontactComponent } from './i18ncontact.component';

describe('I18ncontactComponent', () => {
  let component: I18ncontactComponent;
  let fixture: ComponentFixture<I18ncontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18ncontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18ncontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
