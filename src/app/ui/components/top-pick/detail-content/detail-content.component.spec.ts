import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContentComponent } from './detail-content.component';

describe('DetailContentComponent', () => {
  let component: DetailContentComponent;
  let fixture: ComponentFixture<DetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
