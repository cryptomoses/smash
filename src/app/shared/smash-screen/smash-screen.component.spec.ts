import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashScreenComponent } from './smash-screen.component';

describe('SmashScreenComponent', () => {
  let component: SmashScreenComponent;
  let fixture: ComponentFixture<SmashScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
