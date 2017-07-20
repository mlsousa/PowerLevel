import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyonComponent } from './super-saiyon.component';

describe('SuperSaiyonComponent', () => {
  let component: SuperSaiyonComponent;
  let fixture: ComponentFixture<SuperSaiyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
