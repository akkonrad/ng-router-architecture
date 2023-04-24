import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabOneComponent } from './sub-tab-one.component';

describe('SubTabOneComponent', () => {
  let component: SubTabOneComponent;
  let fixture: ComponentFixture<SubTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTabOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
