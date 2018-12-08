import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleanimationComponent } from './simpleanimation.component';

describe('SimpleanimationComponent', () => {
  let component: SimpleanimationComponent;
  let fixture: ComponentFixture<SimpleanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
