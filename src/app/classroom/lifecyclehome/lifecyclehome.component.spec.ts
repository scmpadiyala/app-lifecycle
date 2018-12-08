import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehomeComponent } from './lifecyclehome.component';

describe('LifecyclehomeComponent', () => {
  let component: LifecyclehomeComponent;
  let fixture: ComponentFixture<LifecyclehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
