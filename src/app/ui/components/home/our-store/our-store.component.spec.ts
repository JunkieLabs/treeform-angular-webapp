import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoreComponent } from './our-store.component';

describe('OurStoreComponent', () => {
  let component: OurStoreComponent;
  let fixture: ComponentFixture<OurStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
