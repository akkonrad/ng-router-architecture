import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatTabComponent } from './flat-tab.component';

describe('FlatTabComponent', () => {
  let component: FlatTabComponent;
  let fixture: ComponentFixture<FlatTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
