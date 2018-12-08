import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutstyleComponent } from './aboutstyle.component';

describe('AboutstyleComponent', () => {
  let component: AboutstyleComponent;
  let fixture: ComponentFixture<AboutstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
