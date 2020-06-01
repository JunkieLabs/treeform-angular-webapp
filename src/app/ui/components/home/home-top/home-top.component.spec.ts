import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopComponent } from './home-top.component';

describe('HomeTopComponent', () => {
  let component: HomeTopComponent;
  let fixture: ComponentFixture<HomeTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
