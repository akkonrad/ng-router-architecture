import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepTwoComponent } from './nested-step-two.component';

describe('NestedStepTwoComponent', () => {
  let component: NestedStepTwoComponent;
  let fixture: ComponentFixture<NestedStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedStepTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
