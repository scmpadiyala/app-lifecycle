import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestyleComponent } from './homestyle.component';

describe('HomestyleComponent', () => {
  let component: HomestyleComponent;
  let fixture: ComponentFixture<HomestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
