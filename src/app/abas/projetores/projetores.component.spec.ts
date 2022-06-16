import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoresComponent } from './projetores.component';

describe('ProjetoresComponent', () => {
  let component: ProjetoresComponent;
  let fixture: ComponentFixture<ProjetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
