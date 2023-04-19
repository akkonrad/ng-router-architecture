import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipTableComponent } from './starship-table.component';

describe('StarshipTableComponent', () => {
  let component: StarshipTableComponent;
  let fixture: ComponentFixture<StarshipTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
