import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidformsComponent } from './validforms.component';

describe('ValidformsComponent', () => {
  let component: ValidformsComponent;
  let fixture: ComponentFixture<ValidformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
