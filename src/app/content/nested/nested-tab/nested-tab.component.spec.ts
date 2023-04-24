import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTabComponent } from './nested-tab.component';

describe('NestedTabComponent', () => {
  let component: NestedTabComponent;
  let fixture: ComponentFixture<NestedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
