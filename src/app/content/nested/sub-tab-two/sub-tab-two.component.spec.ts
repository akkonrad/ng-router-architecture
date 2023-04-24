import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabTwoComponent } from './sub-tab-two.component';

describe('SubTabTwoComponent', () => {
  let component: SubTabTwoComponent;
  let fixture: ComponentFixture<SubTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTabTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
