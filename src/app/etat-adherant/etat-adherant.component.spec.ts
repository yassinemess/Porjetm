import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatAdherantComponent } from './etat-adherant.component';

describe('EtatAdherantComponent', () => {
  let component: EtatAdherantComponent;
  let fixture: ComponentFixture<EtatAdherantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatAdherantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
