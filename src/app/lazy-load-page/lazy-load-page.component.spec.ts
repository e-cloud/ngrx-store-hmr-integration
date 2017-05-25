import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadPageComponent } from './lazy-load-page.component';

describe('LazyLoadPageComponent', () => {
  let component: LazyLoadPageComponent;
  let fixture: ComponentFixture<LazyLoadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
