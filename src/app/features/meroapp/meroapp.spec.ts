import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meroapp } from './meroapp';

describe('Meroapp', () => {
  let component: Meroapp;
  let fixture: ComponentFixture<Meroapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meroapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meroapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
