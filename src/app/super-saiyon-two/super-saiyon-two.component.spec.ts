import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyonTwoComponent } from './super-saiyon-two.component';

describe('SuperSaiyonTwoComponent', () => {
  let component: SuperSaiyonTwoComponent;
  let fixture: ComponentFixture<SuperSaiyonTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyonTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
