import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankContainerComponent } from './blank-container.component';

describe('BlankContainerComponent', () => {
  let component: BlankContainerComponent;
  let fixture: ComponentFixture<BlankContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
