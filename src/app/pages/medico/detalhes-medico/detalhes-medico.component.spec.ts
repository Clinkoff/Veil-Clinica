import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesMedicoComponent } from './detalhes-medico.component';

describe('DetalhesMedicoComponent', () => {
  let component: DetalhesMedicoComponent;
  let fixture: ComponentFixture<DetalhesMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
