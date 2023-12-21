import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroAcessoComponent } from './erro-acesso.component';

describe('ErroAcessoComponent', () => {
  let component: ErroAcessoComponent;
  let fixture: ComponentFixture<ErroAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroAcessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErroAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
