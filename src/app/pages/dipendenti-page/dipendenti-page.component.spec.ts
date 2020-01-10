import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendentiPageComponent } from './dipendenti-page.component';

describe('DipendentiPageComponent', () => {
  let component: DipendentiPageComponent;
  let fixture: ComponentFixture<DipendentiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipendentiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
