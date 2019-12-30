import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdblockDetectComponent } from './ng-adblock-detect.component';

describe('NgAdblockDetectComponent', () => {
  let component: NgAdblockDetectComponent;
  let fixture: ComponentFixture<NgAdblockDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdblockDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdblockDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
