import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyonThreeComponent } from './super-saiyon-three.component';

describe('SuperSaiyonThreeComponent', () => {
  let component: SuperSaiyonThreeComponent;
  let fixture: ComponentFixture<SuperSaiyonThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyonThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
