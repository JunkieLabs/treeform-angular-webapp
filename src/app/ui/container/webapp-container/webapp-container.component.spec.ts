import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappContainerComponent } from './webapp-container.component';

describe('WebappContainerComponent', () => {
  let component: WebappContainerComponent;
  let fixture: ComponentFixture<WebappContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebappContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
