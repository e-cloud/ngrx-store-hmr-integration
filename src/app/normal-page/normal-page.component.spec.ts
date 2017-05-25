import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPageComponent } from './normal-page.component';

describe('NormalPageComponent', () => {
  let component: NormalPageComponent;
  let fixture: ComponentFixture<NormalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
