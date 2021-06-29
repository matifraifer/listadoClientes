import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteParticularComponent } from './cliente-particular.component';

describe('ClienteParticularComponent', () => {
  let component: ClienteParticularComponent;
  let fixture: ComponentFixture<ClienteParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
