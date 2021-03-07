import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strona2Component } from './strona2.component';

describe('Strona2Component', () => {
  let component: Strona2Component;
  let fixture: ComponentFixture<Strona2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strona2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
