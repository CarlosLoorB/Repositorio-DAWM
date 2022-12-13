import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top7Component } from './top7.component';

describe('Top7Component', () => {
  let component: Top7Component;
  let fixture: ComponentFixture<Top7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
