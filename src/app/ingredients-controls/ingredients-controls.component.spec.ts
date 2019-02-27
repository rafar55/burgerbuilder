import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsControlsComponent } from './ingredients-controls.component';

describe('IngredientsControlsComponent', () => {
  let component: IngredientsControlsComponent;
  let fixture: ComponentFixture<IngredientsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
