import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerGalleryComponent } from './inner-gallery.component';

describe('InnerGalleryComponent', () => {
  let component: InnerGalleryComponent;
  let fixture: ComponentFixture<InnerGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
