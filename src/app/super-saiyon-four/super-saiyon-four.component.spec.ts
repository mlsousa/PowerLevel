import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyonFourComponent } from './super-saiyon-four.component';

describe('SuperSaiyonFourComponent', () => {
  let component: SuperSaiyonFourComponent;
  let fixture: ComponentFixture<SuperSaiyonFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyonFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyonFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
