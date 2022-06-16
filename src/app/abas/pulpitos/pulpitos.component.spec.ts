import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulpitosComponent } from './pulpitos.component';

describe('PulpitosComponent', () => {
  let component: PulpitosComponent;
  let fixture: ComponentFixture<PulpitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulpitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulpitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
